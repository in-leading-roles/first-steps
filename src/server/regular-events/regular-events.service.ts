import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RegularEvent } from '../models/regular-events.model';

@Injectable()
export class RegularEventsService {
    constructor (@InjectModel(RegularEvent) private regularEventRepository: typeof RegularEvent) {}

    async getAll() {
        const regluarEvent = await this.regularEventRepository.findAll({include:{all:true}});
        return regluarEvent;
    }
}
