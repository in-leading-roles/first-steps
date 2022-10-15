import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async getAllUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }

    async createUser(dto: createUserDto){
        const users = await this.userRepository.create(dto);
        return users;
    }
}
