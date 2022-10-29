import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Roles } from './roles-auth/roles.decorator';
import { SkipAuth } from './jwt-auth/skip-auth.decorator';
import { LoginResponse } from 'src/common/LoginResponse';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @SkipAuth()
    @ApiOperation({summary: 'Вход в аккаунт'})
    @Post('/login')
    async login(@Body() userDto: createUserDto):LoginResponse {
      return this.authService.login(userDto);
    }
    
    /*@Roles("HR")*/
    @SkipAuth()
    @ApiOperation({summary: 'Регистрация пользователя'})
    @Post('/registration')
    registration(@Body() userDto: createUserDto){
        return this.authService.registration(userDto);
    }
}
