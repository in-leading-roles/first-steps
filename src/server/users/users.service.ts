import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
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

    async getUserById(id: string) {
        const user = await this.userRepository.findOne({where: {id}, include:{all:true}});
        return user;
    }

    async getByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}, include:{all:true}});
        return user;
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

    async getUserEvents(id: string){
        const user = await this.userRepository.findOne({where: {id}, include:{all:true}});
        return user.events;
    }
    
    async findOne(login: string) {
        return this.userRepository.findOne({where: {login}});
    }

    async getUserRoles(id: string) {
        const user = await this.userRepository.findOne({where: {id}, include:{all:true}});
        return user.roles;
    }

    async getUserTeams(id: string) {
        const user = await this.userRepository.findOne({where: {id}, include:{all:true}});
        return user.teams;
    }

    async updateUser(id:string,dto:createUserDto){
        dto.password = await bcrypt.hash(dto.password, 5)
        const user = await this.userRepository.update((dto), {where:{id}});
        return this.getUserById(id);
    }
}