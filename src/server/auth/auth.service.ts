import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userDto: createUserDto) {
    const user = await this.usersService.findOne(userDto.login);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    return null;
  }
}
