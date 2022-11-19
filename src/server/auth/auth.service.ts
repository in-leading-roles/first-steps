import { Injectable } from '@nestjs/common';
import { createUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/users.model';
import { RolesService } from '../roles/roles.service';
import { Password } from '@mui/icons-material';

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
    console.log(user);
    const token = await this.generateToken(user);
    return {
      token: token,
      roles: user.roles
    };
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
    const roles = await Promise.all([this.userSerive.getUserRoles(String(user.id))]);
    const rolesValues = roles[0].map(role => {
      return role.value;
    });
    const payload = { id: user.id, roles: rolesValues };
    return this.jwtService.sign(payload);
  }
}
