import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {
    @ApiProperty({example: 'userName', description: 'Имя пользователя'})
    readonly login: string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
     password: string;
}