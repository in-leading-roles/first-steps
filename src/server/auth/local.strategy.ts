import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userDto: createUserDto): Promise<any> {
    const user = await this.authService.validateUser(userDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}