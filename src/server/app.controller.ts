import { Controller, Get, Render } from "@nestjs/common";
import { render } from "react-dom";
import { SkipAuth } from "./auth/jwt-auth/skip-auth.decorator";

@Controller('/')
export class AppController {

    @SkipAuth()
    @Get([''])
    @Render('layout')
    pages(){

    }
}