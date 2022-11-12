import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./models/roles.model";
import { UserRoles } from "./models/user-roles.model";
import { EventsModule } from './events/events.module';
import { Event } from "./models/events.model";
import { UserEvents } from "./events/users-events.model";
import { AuthModule } from './auth/auth.module';
import { AppController } from "./app.controller";
import { Team } from "./models/teams.model";
import { UserTeams } from "./teams/user-teams.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Event, UserEvents, Team,  UserTeams],
            autoLoadModels: true,
          }),
        UsersModule,
        RolesModule,
        EventsModule,
        AuthModule,
    ],
    controllers: [AppController]
})
export class AppModule{}