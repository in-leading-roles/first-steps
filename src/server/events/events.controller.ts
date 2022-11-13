import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventsDto } from './dto/create-events.dto';
import { EventsService } from './events.service';
import { Event } from '../models/events.model';
import { Json } from 'sequelize/types/utils';
import { Roles } from '../auth/roles-auth/roles.decorator';

@ApiTags('События')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @ApiOperation({ summary: 'Получение всех событий' })
  @ApiResponse({ status: 200, type: [Event] })
  @Get()
  getAll() {
    return this.eventsService.getAllEvents();
  }

  @ApiOperation({ summary: 'Получение событий по значению' })
  @ApiResponse({ status: 200, type: Event })
  @Get('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id события',
    example: '1',
    type: 'number',
  })
  getByValue(@Param('id') id: string) {
    return this.eventsService.getEventById(id);
  }

  @ApiOperation({summary: 'Создание события'})
  @ApiResponse({status:200, type: Event})
  @Post()
  create(@Body() dto: CreateEventsDto){
      return this.eventsService.createEvent(dto);
  }
    
    @ApiOperation({summary: 'Удаление события'})
    @ApiResponse({status:200, description:  JSON.stringify({
        destroyedRows:1
    })})
    @Delete('/:id')
    delete(@Param('id') id: string){
        return this.eventsService.deleteEvent(id);
    }

    @ApiOperation({summary: 'Редактирование'})
    @ApiResponse({status:200, type: Event})
    @Put('/:id')
    update(@Param('id') id: string, @Body() dto: CreateEventsDto){
        return this.eventsService.updateEvent(id,dto);
    }
    
    @ApiParam({
        name: 'userId',
        required: true,
        description: 'id пользователя',
        example: 'id',
        type: 'string',
      })
      @ApiParam({
        name: 'eventId',
        required: true,
        description: 'id события',
        example: 'id',
        type: 'string',
      })
    @ApiOperation({ summary: 'Добавление пользователя в событие' })
    @ApiResponse({ status: 200, type: Event })
    @Put('/userevent/:userId/:eventId')
    addUser(@Param('userId') userId: string, @Param('eventId') eventId: string) {
      return this.eventsService.addUserToEvent(userId, eventId);
    }
}
