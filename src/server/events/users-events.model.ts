import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/server/users/users.model";
import { Event } from "src/server/events/events.model";

@Table({tableName: 'users_events', createdAt: false, updatedAt: false})
export class UserEvents extends Model<UserEvents>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=>Event)
    @Column({type: DataType.INTEGER})
    eventId: number;

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    userId: number;

    
}