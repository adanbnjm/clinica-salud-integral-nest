import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateMedicoDto {
  @ApiPropertyOptional({
    example: 'Juan',
    description: 'Nombre del médico',
  })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({
    example: 'Pérez',
    description: 'Apellido paterno del médico',
  })
  @IsOptional()
  @IsString()
  apellidoPaterno?: string;

  @ApiPropertyOptional({
    example: 'Gómez',
    description: 'Apellido materno del médico',
  })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @ApiPropertyOptional({
    example: '70012345',
    description: 'Teléfono del médico',
  })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'ID de la especialidad del médico',
  })
  @IsOptional()
  @IsInt({ message: 'La especialidad debe ser un número entero' })
  especialidadId?: number;
}
