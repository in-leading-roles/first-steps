import { Schedule } from '@mui/icons-material';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { RegularEvent } from '../models/regular-events.model';
import { CreateRegularEventDto } from './dto/create-regular-event.dto';

@Injectable()
export class RegularEventsService {
    constructor(@InjectModel(RegularEvent) private regularEventRepository: typeof RegularEvent) { }

    async getAll() {
        const regluarEvent = await this.regularEventRepository.findAll({ include: { all: true } });
        return regluarEvent;
    }

    async create(dto: CreateRegularEventDto) {
        const regluarEvent = await this.regularEventRepository.create(dto);
        return regluarEvent;
    }
    
    async delete(id: string) {
        const deleted = await this.regularEventRepository.destroy({where:{id}});
        return {destroyedRows:deleted};
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
        await this.regularEventRepository.update(({eventId: eventId, ...regularEvent}), { where: { id } });
        return this.getById(id);
    }

    async deleteEventRegularEvent(id: string, eventId: string) {
        const regularEvent = await this.getById(id);
        await this.regularEventRepository.update(({eventId: null, ...regularEvent}), { where: { id } });
        return this.getById(id);
    }

//    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    handleCron() {
        console.log("EBAT COPAT")
    }
}
