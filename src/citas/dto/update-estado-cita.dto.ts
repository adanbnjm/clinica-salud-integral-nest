import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export class UpdateEstadoCitaDto {
  @ApiProperty({
    example: 'COMPLETADA',
    description: 'Nuevo estado de la cita',
    enum: ['PROGRAMADA', 'COMPLETADA', 'CANCELADA'],
  })
  @IsIn(['PROGRAMADA', 'COMPLETADA', 'CANCELADA'])
  estado: 'PROGRAMADA' | 'COMPLETADA' | 'CANCELADA';
}
