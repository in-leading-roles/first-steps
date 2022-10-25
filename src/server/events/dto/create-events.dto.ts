import { ApiProperty } from "@nestjs/swagger";

export class CreateEventsDto{
    @ApiProperty({example: 'Заголовок', description: 'Содержимое заголовка'})
    readonly title: string;
    
    @ApiProperty({example: 'Обыкновенное описание события', description: 'Содержимое события'})
    readonly content:string;

    @ApiProperty({example: '2022-01-01 01:02:03', description: 'Дата начала события'})
    readonly startDate: Date;

    @ApiProperty({example: '2022-01-02 01:02:03', description: 'Дата окончания события'})
    readonly endDate: Date;

    @ApiProperty({example: '1', description: 'ID пользователя'})
    readonly UserId: string;
}