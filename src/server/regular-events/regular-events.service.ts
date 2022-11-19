import { Co2Sharp, EventAvailableTwoTone, Schedule } from '@mui/icons-material';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import e from 'express';
import { EventsService } from '../events/events.service';
import { RegularEvent } from '../models/regular-events.model';
import { CreateRegularEventDto } from './dto/create-regular-event.dto';
import { Event } from '../models/events.model'
import { CreateEventsDto } from '../events/dto/create-events.dto';

@Injectable()
export class RegularEventsService {
    constructor(@InjectModel(RegularEvent) private regularEventRepository: typeof RegularEvent, private eventsService: EventsService) { }

    async getAll() {
        const regluarEvent = await this.regularEventRepository.findAll({ include: { all: true } });
        return regluarEvent;
    }

    async create(dto: CreateRegularEventDto) {
        const regluarEvent = await this.regularEventRepository.create(dto);
        return regluarEvent;
    }

    async delete(id: string) {
        const deleted = await this.regularEventRepository.destroy({ where: { id } });
        return { destroyedRows: deleted };
    }

    async getById(id: string) {
        const regluarEvent = await this.regularEventRepository.findOne({ where: { id }, include: { all: true } });
        return regluarEvent;
    }

    async update(id: string, dto: CreateRegularEventDto) {
        const regluarEvent = await this.regularEventRepository.update((dto), { where: { id } });
        return this.getById(id);
    }

    async addEventToRegularEvent(id: string, eventId: string) {
        const regularEvent = await this.getById(id);
        await this.regularEventRepository.update(({ eventId: eventId, ...regularEvent }), { where: { id } });
        return this.getById(id);
    }

    async deleteEventRegularEvent(id: string) {
        const regularEvent = await this.getById(id);
        await this.regularEventRepository.update(({ eventId: null, ...regularEvent }), { where: { id } });
        return this.getById(id);
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async handleCron() {
        let deadLine = new Date();
        deadLine.setDate(deadLine.getDate() + 7);

        let EventsStringify: string[] = [];
        (await this.eventsService.getAllEvents()).map((event) => {
            EventsStringify.push(JSON.stringify({ title: event.title, content: event.content, startDate: event.startDate, endDate: event.endDate }))
        });

        (await this.getPlannedEventsWithFilter()).map((event) => {
            if (event.startDate < deadLine) {
                if (! (EventsStringify.includes( JSON.stringify({ title: event.title, content: event.content, startDate: event.startDate, endDate: event.endDate })))) {
                    let createEventsDtoTwo = new CreateEventsDtoTwo(event.title, event.content, event.startDate, event.endDate, event.UserId);
                    this.eventsService.createEventWithoutDTO(createEventsDtoTwo)
                }
            }
        });

        let EventsToAdd = [];

        (await this.getPlannedEvents()).map((event) => {
            if (event.startDate < deadLine) {
                EventsToAdd.push(event);
            }
        })

        function comparePlannedEventsByDate(a, b) {
            if (a.startDate > b.startDate) return 1;
            if (a.startDate == b.startDate) return 0;
            if (a.startDate < b.startDate) return -1;
        }
        EventsToAdd.sort(comparePlannedEventsByDate);

        function comparePlannedEventsByRegularEventId(a, b) {
            if (a.regularEventId > b.regularEventId) return 1;
            if (a.regularEventId == b.regularEventId) return 0;
            if (a.regularEventId < b.regularEventId) return -1;
        }
        EventsToAdd.sort(comparePlannedEventsByRegularEventId);

        let maxElements = {};
        EventsToAdd.map((element) => {
            maxElements[`${element.regularEventId}`] = element
        })

        EventsToAdd.map((element) => {
            let test = this.addEventToRegularEventByParameters(element.title, element.content, element.startDate, element.endDate, element.regularEventId, element.id);
        })

        return Object.values(maxElements)
    }

    private async addEventToRegularEventByParameters(title, content, startDate, endDate, regularEventId, eventId) {
        let event = await this.eventsService.getEventByParameters(title, content, startDate, endDate);
        return await this.addEventToRegularEvent(regularEventId, String(event.id));
        
    }

    async getPlannedEventsWithFilter() {
        let eventsArray = await Promise.all([this.getPlannedEvents()]);
        let events = eventsArray[0];
        let result = events.reduce((result, item) => {
            return result.map((r) => {
                return JSON.stringify({ title: r.title, content: r.content, startDate: r.startDate, endDate: r.endDate })
            })
                .includes(JSON.stringify({ title: item.title, content: item.content, startDate: item.startDate, endDate: item.endDate })) ? result : [...result, item];
        }, []);

        return result;
    }

    private async getPlannedEvents() {
        const regularEventsPromise: RegularEvent[][] = await Promise.all([this.getAll()])
        const regularEvents: RegularEvent[] = regularEventsPromise[0].map(regularEvent => {
            return regularEvent.dataValues;
        });

        let events: any[] = [];

        regularEvents.map((regularEvent) => {
            let typeInterval: string = regularEvent.repeatEvery.split(' ')[1]
            let valueInterval: string = regularEvent.repeatEvery.split(' ')[0]

            let event: Event = regularEvent.event.dataValues;

            let oldMonth = event.startDate.getMonth();
            let oldYear: number = event.startDate.getFullYear();

            switch (typeInterval) {
                case 'day':
                    while (oldMonth == ((event.startDate).getMonth())) {
                        event.startDate.setDate(event.startDate.getDate() + Number(valueInterval));
                        event.endDate.setDate(event.endDate.getDate() + Number(valueInterval));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()), regularEventId: regularEvent.id });
                    }
                    break;
                case 'week':
                    while (oldMonth == ((event.startDate).getMonth())) {
                        event.startDate.setDate(event.startDate.getDate() + (Number(valueInterval) * 7));
                        event.endDate.setDate(event.endDate.getDate() + (Number(valueInterval) * 7));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()), regularEventId: regularEvent.id });
                    }
                    break;
                case 'month':
                    while (oldYear == ((event.startDate).getFullYear())) {
                        event.startDate.setMonth(event.startDate.getMonth() + Number(valueInterval));
                        event.endDate.setMonth(event.endDate.getMonth() + Number(valueInterval));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()), regularEventId: regularEvent.id });
                    }
                    break;
                case 'year':
                    event.startDate.setFullYear(event.startDate.getFullYear() + Number(valueInterval));
                    event.startDate.setFullYear(event.endDate.getFullYear() + Number(valueInterval));

                    events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()), regularEventId: regularEvent.id });
                    break;
            }
        })

        return events;
    }
}

class CreateEventsDtoTwo {
    constructor(title: string, content: string, startDate: Date, endDate: Date, UserId: string) {
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
        this.UserId = UserId;
    }

    title: string;

    content: string;

    startDate: Date;

    endDate: Date;

    UserId: string;
}