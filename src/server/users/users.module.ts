import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserRoles } from 'src/server/roles/user-roles.model';
import { Role } from 'src/server/roles/roles.model';
import { RolesModule } from 'src/server/roles/roles.module';
import { UserEvents } from '../events/users-events.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRoles, Role, UserEvents]),
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
