import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsIn, IsInt, IsOptional } from 'class-validator';

export class CreateCitaDto {
  @ApiProperty({
    example: 1,
    description: 'ID del paciente',
  })
  @IsInt()
  pacienteId: number;

  @ApiProperty({
    example: 1,
    description: 'ID del médico',
  })
  @IsInt()
  medicoId: number;

  @ApiProperty({
    example: '2026-09-25T10:00:00.000Z',
    description: 'Fecha y hora de la cita',
  })
  @IsDateString()
  fechaHora: string;

  @ApiProperty({
    example: 'PROGRAMADA',
    description: 'Estado de la cita',
    required: false,
    enum: ['PROGRAMADA', 'COMPLETADA', 'CANCELADA'],
  })
  @IsOptional()
  @IsIn(['PROGRAMADA', 'COMPLETADA', 'CANCELADA'])
  estado?: 'PROGRAMADA' | 'COMPLETADA' | 'CANCELADA';
}
