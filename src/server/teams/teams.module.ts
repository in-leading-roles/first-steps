import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';
import { TeamsController } from './teams.controller';
import { Team } from '../models/teams.model';
import { TeamsService } from './teams.service';
import { UserTeams } from './user-teams.model';

@Module({
  imports:[SequelizeModule.forFeature([Team,UserTeams]),forwardRef(()=> UsersModule)],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
