import {Controller, Get, Render} from '@nestjs/common';
import { SkipAuth } from './auth/jwt-auth/skip-auth.decorator';

@Controller('/')
export class AppController {

    @SkipAuth()
    @Get(['', 'hr', 'login'])
    @Render('layout')
    pages(){

    }
}