import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventsDto } from './dto/create-events.dto';
import { Events } from './events.model';

@Injectable()
export class EventsService {    
    constructor (@InjectModel(Events) private eventsRepository: typeof Events) {}

    async createEvent(dto: CreateEventsDto){
        const event = await this.eventsRepository.create(dto);
        return event;
}

    async getEventByValue(value:string){
        const event = await this.eventsRepository.findOne({where: {value}});
        return event;
}}
