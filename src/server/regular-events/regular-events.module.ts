import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegularEvent } from '../models/regular-events.model';
import { RegularEventsController } from './regular-events.controller';
import { RegularEventsService } from './regular-events.service';

@Module({
  imports:[SequelizeModule.forFeature([RegularEvent])],
  controllers: [RegularEventsController],
  providers: [RegularEventsService]
})
export class RegularEventsModule {}
