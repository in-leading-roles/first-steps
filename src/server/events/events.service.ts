import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from '../users/users.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { Event } from './events.model';

@Injectable()
export class EventsService {    
    constructor (@InjectModel(Event) private eventsRepository: typeof Event, private userService:UsersService) {}

    async createEvent(dto: CreateEventsDto){
        const event = await this.eventsRepository.create(dto);
        return event;
}

    async getEventById(id:string){
        const event = await this.eventsRepository.findOne({where: {id}, include:{all:true}});
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
        return this.getEventById(id)
    }

    async addUserToEvent(userId: string, eventId: string){
        const event = await this.getEventById(eventId);
        const user = await this.userService.getUserById(userId);
        console.log(user.id)
        await event.$add('users', [user.id]);
        event.users = [user];
        return event;
    }
}
