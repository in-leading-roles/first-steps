import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SimpleConsoleLogger } from 'typeorm';
import { Roles } from '../auth/roles-auth/roles.decorator';
import { RegularEvent } from '../models/regular-events.model';
import { CreateTeamDto } from '../teams/dto/create-team.dto';
import { CreateRegularEventDto } from './dto/create-regular-event.dto';
import { RegularEventsService } from './regular-events.service';

@ApiTags('Регулярные события')
@Controller('regular-events')
export class RegularEventsController {
    constructor(private regluarEventsService: RegularEventsService) { }

    @ApiOperation({ summary: 'Получение всех регулярных событий' })
    @ApiResponse({ status: 200, type: [RegularEvent] })
    @Get()
    getAll() {
      return this.regluarEventsService.getAll();
    }

    @Get('/crone')
    CroneTest() {
      return this.regluarEventsService.handleCron();
    }

    @Get('/plannedevents')
    getPlannedEvents() {
      return this.regluarEventsService.getPlannedEvents();
    }
  
    @ApiOperation({ summary: 'Получение команды по id' })
    @ApiResponse({ status: 200, type: RegularEvent })
    @Get('/:id')
    @ApiParam({
      name: 'id',
      required: true,
      description: 'id события',
      example: '1',
      type: 'number',
    })
    getByValue(@Param('id') id: string) {
      return this.regluarEventsService.getById(id);
    }
  
    @Roles("HR")
    @ApiOperation({ summary: 'Создание регулярного события' })
    @ApiResponse({ status: 200, type: RegularEvent })
    @Post()
    create(@Body() dto: CreateRegularEventDto) {
      return this.regluarEventsService.create(dto);
    }
  
    @Roles("HR")
    @ApiOperation({ summary: 'Удаление регулярного события' })
    @ApiResponse({
      status: 200, description: JSON.stringify({
        destroyedRows: 1
      })
    })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'id регулярного события',
      example: 'id',
      type: 'string',
    })
    @Delete('/:id')
    delete(@Param('id') id: string) {
      return this.regluarEventsService.delete(id);
    }
  
    @Roles("HR")
    @ApiOperation({ summary: 'Редактирование регулярного события' })
    @ApiResponse({ status: 200, type: RegularEvent })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'id регулярного события',
      example: 'id',
      type: 'string',
    })
    @Put('/:id')
    update(@Param('id') id: string, @Body() dto: CreateRegularEventDto) {
      return this.regluarEventsService.update(id, dto);
    }
  
    @Roles("HR")
    @ApiOperation({ summary: 'Добавление события к регулярному событию' })
    @ApiResponse({ status: 200, type: RegularEvent })
    @Put('/eventregularevent/:regularEventId/:eventId')
    @ApiParam({
      name: 'regularEventId',
      required: true,
      description: 'id регулярного события',
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
    addEvent(@Param('regularEventId') regularEventId: string, @Param('eventId') eventId: string) {
      return this.regluarEventsService.addEventToRegularEvent(regularEventId, eventId);
    }
  
  
    @Roles("HR")
    @ApiOperation({ summary: 'Удаление события из регулярного события' })
    @ApiResponse({ status: 200, type: RegularEvent })
    @Delete('/eventregularevent/:regularEventId/:eventId')
    @ApiParam({
      name: 'regularEventId',
      required: true,
      description: 'id регулярного события',
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
    deleteEvent(@Param('regularEventId') regularEventId: string, @Param('eventId') eventId: string) {
      return this.regluarEventsService.deleteEventRegularEvent(regularEventId, eventId);
    }
}
