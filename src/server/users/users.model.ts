import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/server/roles/roles.model";
import { Event } from "src/server/events/events.model";
import { UserRoles } from "src/server/roles/user-roles.model";
import { UserEvents } from "../events/users-events.model";

interface UserCreationAttrs {
    login: string;
    email: string;
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
    
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email:string;

    @ApiProperty({example: '123456789', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull:false})
    password:string;

    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles:Role[]

    @BelongsToMany(()=>Event, ()=>UserEvents)
    events: Event[]
}