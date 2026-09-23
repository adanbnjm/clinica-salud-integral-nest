import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdatePacienteDto {
  @ApiPropertyOptional({
    example: 'Ana',
    description: 'Nombre del paciente',
  })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({
    example: 'García',
    description: 'Apellido paterno del paciente',
  })
  @IsOptional()
  @IsString()
  apellidoPaterno?: string;

  @ApiPropertyOptional({
    example: 'López',
    description: 'Apellido materno del paciente',
  })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @ApiPropertyOptional({
    example: '12345678',
    description: 'Carnet de identidad del paciente',
  })
  @IsOptional()
  @IsString()
  ci?: string;

  @ApiPropertyOptional({
    example: 'ana.garcia@example.com',
    description: 'Correo electrónico del paciente',
  })
  @IsOptional()
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email?: string;

  @ApiPropertyOptional({
    example: '70012345',
    description: 'Número de teléfono',
  })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiPropertyOptional({
    example: 'Av. Principal #123',
    description: 'Dirección del paciente',
  })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiPropertyOptional({
    example: '1990-01-01',
    description: 'Fecha de nacimiento del paciente',
  })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser válida' })
  fechaNacimiento?: string;
}
