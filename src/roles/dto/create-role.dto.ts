import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{

    @ApiProperty({example: 'USER', description: 'Значение роли'})
    readonly value: string;
    
    @ApiProperty({example: 'Простой сотрудник компании', description: 'описание роли'})
    readonly description: string;
}