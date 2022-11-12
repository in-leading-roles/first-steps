import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "./events.model";

interface EegularEventCreationAttrs{
    repeatEvery: string;
}

@Table({tableName: 'regular_events'})
export class RegularEvent extends Model<RegularEvent, EegularEventCreationAttrs>{
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: '1 week', description: 'Частота повторения события'})
    @Column({type: DataType.STRING, allowNull: false})
    repeatEvery: String;

    @BelongsTo(()=>Event)
    event: Event

    @ForeignKey(() => Event)
    eventId: number
}
