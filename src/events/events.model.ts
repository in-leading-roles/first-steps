import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table } from "sequelize-typescript";

interface EventCreationAttrs{
    title: string;
    content: string;
    startDate: Date;
    endDate: Date;
}

@Table({tableName: 'events'})
export class Events extends Model<Events, EventCreationAttrs>{
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Заголовок', description: 'Содержимое заголовка'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;
    
    @ApiProperty({example: 'Обыкновенное описание ивента', description: 'Содержимое ивента'})
    @Column({type: DataType.STRING, allowNull: false})
    content:string;

    @ApiProperty({example: '2022-01-01', description: 'Дата начала ивента'})
    @Column({type: DataType.DATE, allowNull: false})
    startDate: Date;

    @ApiProperty({example: '2022-01-02', description: 'Дата окончания ивента'})
    @Column({type: DataType.DATE, allowNull: false})
    endDate: Date;

}
