import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './events.model'


@Module({
  imports: [SequelizeModule.forFeature([Event])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}