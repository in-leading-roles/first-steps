import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Event } from "../events/events.model";
import { UserRoles } from "../roles/user-roles.model";
import { UserEvents } from "../events/users-events.model";
import { Team } from "src/server/teams/teams.model";
import { UserTeams } from "../teams/user-teams.model";

interface UserCreationAttrs {
    login: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'UserName', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    login:string;

    @ApiProperty({example: '123456789', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull:true})
    password:string;

    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles:Role[]

    @BelongsToMany(()=>Event, ()=>UserEvents)
    events: Event[]

    @BelongsToMany(()=>Team, ()=>UserTeams)
    teams: Team[]
}