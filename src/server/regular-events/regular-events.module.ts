import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegularEvent } from '../models/regular-events.model';
import { Event } from '../models/events.model';
import { RegularEventsController } from './regular-events.controller';
import { RegularEventsService } from './regular-events.service';
import { EventsModule } from '../events/events.module';

@Module({
  imports:[SequelizeModule.forFeature([RegularEvent, Event])],
  controllers: [RegularEventsController],
  providers: [RegularEventsService]
})
export class RegularEventsModule {}
