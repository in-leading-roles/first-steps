import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { RolesModule } from '../roles/roles.module';
import { RolesGuard } from './roles.guard';
require('dotenv').config();

@Module({
  imports: [
    UsersModule,
    PassportModule,
    RolesModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
  controllers: [AuthController],
})
export class AuthModule {}
