import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "./users.model";
import { UserEvents } from "../events/users-events.model";

interface EventCreationAttrs{
    title: string;
    content: string;
    startDate: Date;
    endDate: Date;
}

@Table({tableName: 'events'})
export class Event extends Model<Event, EventCreationAttrs>{
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Заголовок', description: 'Содержимое заголовка'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;
    
    @ApiProperty({example: 'Обыкновенное описание события', description: 'Содержимое события'})
    @Column({type: DataType.STRING, allowNull: false})
    content:string;

    @ApiProperty({example: '2022-01-01 01:02:03', description: 'Дата начала события'})
    @Column({type: DataType.DATE, allowNull: false})
    startDate: Date;

    @ApiProperty({example: '2022-01-02 01:02:03', description: 'Дата окончания события'})
    @Column({type: DataType.DATE, allowNull: false})
    endDate: Date;

    @BelongsToMany(()=>User, ()=>UserEvents)
    users: User[]

}
