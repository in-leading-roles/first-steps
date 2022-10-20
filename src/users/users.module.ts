import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserRoles, Role])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
