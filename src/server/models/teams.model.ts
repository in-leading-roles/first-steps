import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/server/models/users.model";
import { UserTeams } from "../teams/user-teams.model";

interface TeamCreationAttrs{
    value:string;
    description:string;
}

@Table({tableName: 'teams'})
export class Team extends Model<Team, TeamCreationAttrs>{
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Codiki', description: 'Название команды'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;
    
    @ApiProperty({example: 'Отвечают за код', description: 'Что делает команда'})
    @Column({type: DataType.STRING, allowNull: true})
    description:string;

    @BelongsToMany(()=>User, ()=>UserTeams)
    users: User[]
}