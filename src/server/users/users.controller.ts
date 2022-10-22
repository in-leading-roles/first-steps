import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponse } from 'src/commmon/UserResponse';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController { 
    constructor(private userService: UsersService){}

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status:200, type:[User]})
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto: createUserDto ){
        return this.userService.createUser(userDto);
    }
}