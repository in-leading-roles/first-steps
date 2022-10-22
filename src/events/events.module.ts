import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // imports: [SequelizeModule.forFeature([Events])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
