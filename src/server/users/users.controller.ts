import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
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

    @ApiOperation({summary: 'Получение пользователя по значению'})
    @ApiResponse({status:200, type:[User]})
    @Get('/:id')
    @ApiParam({name: 'id', 
    required: true, 
    description: 'Login пользователя',
    example: 'USER',
    type: 'string'
    })
    getById(@Param('id') id: string){
        return this.userService.getUserById(id);
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto: createUserDto ){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получение событий пользователя'})
    @ApiResponse({status:200, type:Event})
    @Get('getevents/:id')
    getEvents(@Param('id') id: string){
        return this.userService.getUserEvents(id)
    }
}
