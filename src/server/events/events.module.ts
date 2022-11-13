import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from '../models/events.model'
import { UserEvents } from './users-events.model';
import { UsersModule } from '../users/users.module';
import { RegularEvent } from '../models/regular-events.model';


@Module({
  imports: [SequelizeModule.forFeature([Event, UserEvents, RegularEvent]),
  UsersModule],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [
    EventsService
  ]
})
export class EventsModule {}
