import { ApiProperty } from '@nestjs/swagger';

export class CreateCitaDto {
  @ApiProperty({
    example: 1,
    description: 'ID del paciente',
  })
  pacienteId: number;

  @ApiProperty({
    example: 1,
    description: 'ID del médico',
  })
  medicoId: number;

  @ApiProperty({
    example: '2026-09-25T10:00:00',
    description: 'Fecha y hora de la cita',
  })
  fechaHora: string;

  @ApiProperty({
    example: 'PROGRAMADA',
    description: 'Estado de la cita',
    required: false,
    enum: ['PROGRAMADA', 'COMPLETADA', 'CANCELADA'],
  })
  estado?: 'PROGRAMADA' | 'COMPLETADA' | 'CANCELADA';
}
