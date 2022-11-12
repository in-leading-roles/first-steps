import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./server/models/users.model";
import { UsersModule } from './server/users/users.module';
import { RolesModule } from "./server/roles/roles.module";
import { Role } from "./server/models/roles.model";
import { UserRoles } from "./server/models/user-roles.model";
import { EventsModule } from './server/events/events.module';
import { Event } from "./server/models/events.model";
import { AuthModule } from "./server/auth/auth.module";
import { TeamsModule } from './server/teams/teams.module';
import { Team } from "./server/models/teams.model";
import { UserTeams } from "./server/teams/user-teams.model";
import { UserEvents } from "./server/events/users-events.model";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
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
        TeamsModule,
    ]
})
export class AppModule{}