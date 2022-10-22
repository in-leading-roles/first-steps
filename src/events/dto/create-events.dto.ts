import { ApiProperty } from "@nestjs/swagger";

export class CreateEventsDto{
    @ApiProperty({example: 'Заголовок', description: 'Содержимое заголовка'})
    readonly title: string;
    
    @ApiProperty({example: 'Обыкновенное описание ивента', description: 'Содержимое ивента'})
    readonly content:string;

    @ApiProperty({example: '2022-01-01', description: 'Дата начала ивента'})
    readonly startDate: Date;

    @ApiProperty({example: '2022-01-02', description: 'Дата окончания ивента'})
    readonly endDate: Date;
}