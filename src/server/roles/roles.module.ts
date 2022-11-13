import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/server/models/users.model';
import { RolesController } from './roles.controller';
import { Role } from '../models/roles.model';
import { RolesService } from './roles.service';
import { UserRoles } from '../models/user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, UserRoles, User])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
