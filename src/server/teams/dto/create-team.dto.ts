import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamDto{

    @ApiProperty({example: 'Codiki', description: 'Название команды'})
    readonly value: string;
    
    @ApiProperty({example: 'Отвечают за код', description: 'Что делает команда'})
    readonly description: string;
}