import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventsDto } from './dto/create-events.dto';
import { EventsService } from './events.service';
import { Event } from './events.model';

@ApiTags('События')
@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService){}

    @ApiOperation({summary: 'Получение всех событий'})
    @ApiResponse({status:200, type:[Event]})
    @Get()
    getAll(){
        return this.eventsService.getAllEvents();
    }

    @ApiOperation({summary: 'Получение событий по значению'})
    @ApiResponse({status:200, type:Event})
    @Get('/:id')
    @ApiParam({name: 'id', 
    required: true, 
    description: 'id события',
    example: '1',
    type: 'number'})
    getByValue(@Param('id') id: string){
        return this.eventsService.getEventByValue(id);
    }

    @ApiOperation({summary: 'Создание события'})
    @ApiResponse({status:200, type: Event})
    @Post()
    create(@Body() dto: CreateEventsDto){
        return this.eventsService.createEvent(dto);
    }

}
