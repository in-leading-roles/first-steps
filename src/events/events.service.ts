import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventsDto } from './dto/create-events.dto';
import { Events } from './events.model';

@Injectable()
export class EventsService {    
    constructor (@InjectModel(Events) private eventsRepository: typeof Events) {}

    async createEvent(dto: CreateEventsDto){
        const role = await this.eventsRepository.create(dto);
        return role;
}

    async getRoleByValue(value:string){
        const role = await this.eventsRepository.findOne({where: {value}});
        return role;
}}
