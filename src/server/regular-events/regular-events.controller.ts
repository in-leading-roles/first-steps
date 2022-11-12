import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegularEvent } from '../models/regular-events.model';
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
  
    // @ApiOperation({ summary: 'Получение команды по id' })
    // @ApiResponse({ status: 200, type: Team })
    // @Get('/:id')
    // @ApiParam({
    //   name: 'id',
    //   required: true,
    //   description: 'id команды',
    //   example: '1',
    //   type: 'number',
    // })
    // getByValue(@Param('id') id: string) {
    //   return this.teamsService.getTeamById(id);
    // }
  
    // @Roles("HR")
    // @ApiOperation({ summary: 'Создание команды' })
    // @ApiResponse({ status: 200, type: Team })
    // @Post()
    // create(@Body() dto: CreateTeamDto) {
    //   return this.teamsService.createTeam(dto);
    // }
  
    // @Roles("HR")
    // @ApiOperation({ summary: 'Удаление команды' })
    // @ApiResponse({
    //   status: 200, description: JSON.stringify({
    //     destroyedRows: 1
    //   })
    // })
    // @Delete('/:id')
    // delete(@Param('id') id: string) {
    //   return this.teamsService.deleteTeam(id);
    // }
  
    // @Roles("HR")
    // @ApiOperation({ summary: 'Редактирование команды' })
    // @ApiResponse({ status: 200, type: Team })
    // @Put('/:id')
    // update(@Param('id') id: string, @Body() dto: CreateTeamDto) {
    //   return this.teamsService.updateTeam(id, dto);
    // }
  
    // @Roles("HR")
    // @ApiOperation({ summary: 'Добавление пользователя в команду' })
    // @ApiResponse({ status: 200, type: Team })
    // @Put('/userteam/:userId/:teamId')
    // @ApiParam({
    //   name: 'userId',
    //   required: true,
    //   description: 'id пользователя',
    //   example: 'id',
    //   type: 'string',
    // })
    // @ApiParam({
    //   name: 'teamId',
    //   required: true,
    //   description: 'id команды',
    //   example: 'id',
    //   type: 'string',
    // })
    // addUser(@Param('userId') userId: string, @Param('teamId') teamId: string) {
    //   return this.teamsService.addUserToTeam(userId, teamId);
    // }
  
  
    // @Roles("HR")
    // @ApiOperation({ summary: 'Удаление пользователя из команды' })
    // @ApiResponse({ status: 200, type: Team })
    // @Delete('/userteam/:userId/:teamId')
    // @ApiParam({
    //   name: 'userId',
    //   required: true,
    //   description: 'id пользователя',
    //   example: 'id',
    //   type: 'string',
    // })
    // @ApiParam({
    //   name: 'teamId',
    //   required: true,
    //   description: 'id команды',
    //   example: 'id',
    //   type: 'string',
    // })
    // deleteUser(@Param('userId') userId: string, @Param('teamId') teamId: string) {
    //   return this.teamsService.deleteUserFromTeam(userId, teamId);
    // }
}
