import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/server/roles/roles.service';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import * as bcrypt from 'bcrypt'
var passwordGenerator = require('password-generator-js');
@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService:RolesService) {}

    async getAllUsers() {
        const users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }

    async createUser(dto: createUserDto){
        const password = passwordGenerator.generatePassword({length:10, obscureSymbols: false});
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await this.userRepository.create({...dto, password:hashPassword});
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set('roles', [role.id]);
        user.roles = [role];
        user.password = password;
        return user;
    }

    async findOne(login: string) {
        let a = await this.userRepository.findOne({where: {login}});
        return a;
    }
}