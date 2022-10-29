import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./server/app.module";
import {NestExpressApplication} from '@nestjs/platform-express';
import * as path from 'path';

async function start() {
    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const config = new DocumentBuilder()
    .setTitle('First steps')
    .setDescription('API документация для онбординговой системы First steps')
    .setVersion('1.0.0')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);


    app.setBaseViewsDir(path.join(__dirname, 'views'));
    app.set('view engine', 'js');
    app.engine('js', require('express-react-views').createEngine());

    await app.listen(PORT, ()=>console.log(`Server started on port = ${PORT}`))
}

start();