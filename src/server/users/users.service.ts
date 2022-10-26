import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { RolesService } from 'src/server/roles/roles.service';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';
var passwordGenerator = require('password-generator-js');
@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService:RolesService) {}

    async getAllUsers() {
        const users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }

    async createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto);
        user.update({password:passwordGenerator.generatePassword({length:10, obscureSymbols: true})})
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set('roles', [role.id]);
        user.roles = [role]; 
        return user;
    }

    async findOne(login: string) {
        return this.userRepository.findOne({where: {login}});
    }
}