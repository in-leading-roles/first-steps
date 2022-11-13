import { ApiProperty } from "@nestjs/swagger";

export class CreateRegularEventDto {
    @ApiProperty({example: '1 week', description: 'Частота повторения события'})
    readonly repeatEvery: string;
}