import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from '../models/teams.model';
import { UsersService } from 'src/server/users/users.service';

@Injectable()
export class TeamsService {

    constructor (@InjectModel(Team) private teamRepository: typeof Team, private usersService:UsersService ) {}
    async createTeam(dto:CreateTeamDto) {
        const team = await this.teamRepository.create(dto);
        return team;
    }

    async getTeamById(id:string){
        const team = await this.teamRepository.findOne({where:{id},include:{all:true}});
        return team;
    }

    async getAllTeams(){
        const team = await this.teamRepository.findAll({include:{all:true}});
        return team;
    }

    async deleteTeam(id:string){
        const deleted = await this.teamRepository.destroy({where:{id}});
        return {destroyedRows:deleted};
        }

    async updateTeam(id:string,dto:CreateTeamDto){
        const team = await this.teamRepository.update((dto), {where:{id}});
        return this.getTeamById(id);
    }

    async addUserToTeam(userId:string, teamId:string){
        const team = await this.getTeamById(teamId);
        const user = await this.usersService.getUserById(userId);
        await team.$add('users',[user.id]);
        team.users = [user]
        return this.getTeamById(teamId);
    }

    async deleteUserFromTeam(userId:string, teamId:string){
        const team = await this.getTeamById(teamId);
        const user = await this.usersService.getUserById(userId);
        await team.$remove('users',[user.id]);
        return this.getTeamById(teamId);
}
}
