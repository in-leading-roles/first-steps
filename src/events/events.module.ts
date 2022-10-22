import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Events } from './events.model'


@Module({
  imports: [SequelizeModule.forFeature([Events])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
