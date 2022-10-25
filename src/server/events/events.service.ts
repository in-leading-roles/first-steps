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
        const user = await this.userService.getRoleByValue("USER");
        await event.$set('users', [user.id]);
        event.users = [user]; 
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
