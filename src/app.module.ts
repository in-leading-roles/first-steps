import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./server/users/users.model";
import { UsersModule } from './server/users/users.module';
import { RolesModule } from "./server/roles/roles.module";
import { Role } from "./server/roles/roles.model";
import { UserRoles } from "./server/roles/user-roles.model";
import { EventsModule } from './server/events/events.module';
import { Event } from "./server/events/events.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Event],
            autoLoadModels: true,
          }),
        UsersModule,
        RolesModule,
        EventsModule,
    ],
})
export class AppModule{}