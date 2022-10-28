import { Injectable } from '@nestjs/common';
import { createUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.model';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userSerive: UsersService
  ) {}

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

  async login(userDto: createUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: createUserDto) {
    const candidate = await this.usersService.findOne(userDto.login);
    if (candidate) {
      return null;
    }
    const user = await this.usersService.createUser(userDto);
    return user;
  }

  private async generateToken(user: User) {
    let a = [this.userSerive.getUserRoles(String(user.id))];
    const roles = await Promise.all(a);
    console.log(roles[0][0]['value']);
    const payload = { id: user.id, roles: roles[0][0]['value'] };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
