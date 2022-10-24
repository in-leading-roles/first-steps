import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  private async validateUser(userDto: createUserDto) {
    const user = await this.usersService.findOne(userDto.login);
    if (user == null) {
      throw new UnauthorizedException({
        message: 'Некоректная почта или пароль',
      });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некоректная почта или пароль',
    });
  }
}
