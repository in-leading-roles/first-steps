import { Schedule } from '@mui/icons-material';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import e from 'express';
import { EventsService } from '../events/events.service';
import { RegularEvent } from '../models/regular-events.model';
import { CreateRegularEventDto } from './dto/create-regular-event.dto';
import { Event } from '../models/events.model'

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

    async deleteEventRegularEvent(id: string, eventId: string) {
        const regularEvent = await this.getById(id);
        await this.regularEventRepository.update(({ eventId: null, ...regularEvent }), { where: { id } });
        return this.getById(id);
    }

    //    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async handleCron() {
        // let currentDate  = new Date();
        // currentDate.setDate(currentDate.getDate() + 7);
        // console.log(currentDate)
    }



    async getPlannedEvents() {
        const regularEventsPromise = await Promise.all([this.getAll()])
        const regularEvents = regularEventsPromise[0].map(regularEvent => {
            return regularEvent.dataValues;
        });
        let events = [];
        regularEvents.map((regularEvent) => {
            let typeInterval = regularEvent.repeatEvery.split(' ')[1]
            let valueInterval = regularEvent.repeatEvery.split(' ')[0]

            let event = regularEvent.event.dataValues;
            let oldMonth = event.startDate.getMonth();
            let oldYear = event.startDate.getFullYear();
            console.log(oldYear);

            switch (typeInterval) {
                case 'day':
                    while (oldMonth == ((event.startDate).getMonth())) {
                        event.startDate.setDate(event.startDate.getDate() + Number(valueInterval));
                        event.endDate.setDate(event.endDate.getDate() + Number(valueInterval));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()) });
                    }
                    break;
                case 'week':
                    while (oldMonth == ((event.startDate).getMonth())) {
                        event.startDate.setDate(event.startDate.getDate() + (Number(valueInterval) * 7));
                        event.endDate.setDate(event.endDate.getDate() + (Number(valueInterval) * 7));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()) });
                    }
                    break;
                case 'month':
                    while (oldYear == ((event.startDate).getFullYear())) {
                        event.startDate.setMonth(event.startDate.getMonth() + Number(valueInterval));
                        event.endDate.setMonth(event.endDate.getMonth() + Number(valueInterval));

                        events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()) });
                    }
                    break;
                case 'year':
                    event.startDate.setFullYear(event.startDate.getFullYear() + Number(valueInterval));
                    event.startDate.setFullYear(event.endDate.getFullYear() + Number(valueInterval));

                    events.push({ ...event, startDate: new Date(event.startDate.valueOf()), endDate: new Date(event.endDate.valueOf()) });
                    break;
            }
        })
        return events;
    }
}
