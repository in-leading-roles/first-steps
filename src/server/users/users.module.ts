import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserRoles } from 'src/server/roles/user-roles.model';
import { Role } from 'src/server/roles/roles.model';
import { RolesModule } from 'src/server/roles/roles.module';
import { UserEvents } from '../events/users-events.model';
import { Team } from 'src/server/teams/teams.model';
import { UserTeams } from 'src/server/teams/user-teams.model';
import { TeamsModule } from 'src/server/teams/teams.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRoles, Role, UserEvents, Team,UserTeams]),
    RolesModule, TeamsModule
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
