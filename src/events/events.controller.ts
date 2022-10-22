import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventsDto } from './dto/create-events.dto';
import { EventsService } from './events.service';

@ApiTags('Ивенты')
@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService){}

    @ApiOperation({summary: 'Получение всех ивентов'})
    @ApiResponse({status:200, type:[Event]})
    @Get()
    getAll(){
        return this.eventsService.getAllEvents();
    }

    @ApiOperation({summary: 'Получение ивента по значению'})
    @ApiResponse({status:200, type:[Event]})
    @Get('/:value')
    //@ApiParam({})
    getByValue(@Param('value') value: string){
        return this.eventsService.getEventByValue(value);
    }

    @ApiOperation({summary: 'Создание ивента'})
    @ApiResponse({status:200, type: Event})
    @Post()
    create(@Body() dto: CreateEventsDto){
        return this.eventsService.createEvent(dto);
    }

}
