import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SkipAuth } from '../auth/jwt-auth/skip-auth.decorator';
import { GetUserEventsResponse } from 'src/common/GetUserEventsResponse';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Event } from '../events/events.model';
import { Role } from '../roles/roles.model';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { GetUserTeamsResponse } from 'src/common/GetUserTeamsResponse';
import { Team } from 'src/server/teams/teams.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @SkipAuth()
  @Get("getbylogin/:login")
  getByLogin(@Param('login') login: string){
    return this.userService.getByLogin(login);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll():GetUsersResponse {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получение пользователя по значению' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Login пользователя',
    example: 'USER',
    type: 'string',
  })
  getById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'id пользователя',
    example: 'id',
    type: 'string',
  })
  @ApiOperation({ summary: 'Получение событий пользователя' })
  @ApiResponse({ status: 200, type: Event })
  @Get('getevents/:id')
  getEvents(@Param('id') id: string):GetUserEventsResponse {
    return this.userService.getUserEvents(id);
  }

  @SkipAuth()
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id пользователя',
    example: 'id',
    type: 'string',
  })
  @ApiOperation({ summary: 'Получение ролей пользователя' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get('roles/:id')
  getUserRoles(@Param('id') id: string){
    return this.userService.getUserRoles(id);
  }

  @ApiOperation({ summary: 'Получение команд пользователя' })
  @ApiResponse({ status: 200, type: [Team] })
  @Get('getteams/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id пользователя',
    example: 'id',
    type: 'string',
  })
  getTeams(@Param('id') id: string):GetUserTeamsResponse {
    return this.userService.getUserTeams(id);
  }
}
