import { Injectable } from '@nestjs/common';
import { createUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.model';
import { json } from 'sequelize';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService,
        private userService: UsersService) {}
    
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

      async registration(userDto: createUserDto){
        const candidate = await this.userService.findOne(userDto.login);
        if(candidate){
          return null;
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password:hashPassword});
        return user;
    }
    
      private async generateToken(user: User) {
        const payload = {email: user.email, id:user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
      }
}
