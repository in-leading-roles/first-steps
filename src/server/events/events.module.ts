import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './events.model'
import { UserEvents } from './users-events.model';


@Module({
  imports: [SequelizeModule.forFeature([Event, UserEvents])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
