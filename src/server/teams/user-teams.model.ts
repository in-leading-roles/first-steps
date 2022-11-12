import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/server/models/users.model";
import { Team } from "src/server/models/teams.model";


@Table({tableName: 'users_teams', createdAt: false, updatedAt: false})
export class UserTeams extends Model<UserTeams>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>Team)
    @Column({type: DataType.INTEGER})
    teamId: number;

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    userId: number;
}