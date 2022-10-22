import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventsDto } from './dto/create-events.dto';
import { Event } from './events.model';

@Injectable()
export class EventsService {    
    constructor (@InjectModel(Event) private eventsRepository: typeof Event) {}

    async createEvent(dto: CreateEventsDto){
        const event = await this.eventsRepository.create(dto);
        return event;
}

    async getEventByValue(id:string){
        const event = await this.eventsRepository.findOne({where: {id}});
        return event;
    }

    async getAllEvents(){
        const events = await this.eventsRepository.findAll({include:{all:true}});
        return events;
    }

    async deleteEvent(id:string){
        const result = await this.eventsRepository.destroy({where: {id}});
        return {destroyedRows:result};
    }

    async updateEvent(id:string,dto: CreateEventsDto){
        const event = await this.eventsRepository.update(
        (dto), {where: {id} })
        return this.getEventByValue(id)
    }

}
