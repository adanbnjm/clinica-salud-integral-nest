import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'Ana',
    description: 'Nombre del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({
    example: 'García',
    description: 'Apellido paterno del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El apellido paterno es obligatorio' })
  apellidoPaterno: string;

  @ApiProperty({
    example: 'López',
    description: 'Apellido materno del paciente',
    required: false,
  })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @ApiProperty({
    example: '12345678',
    description: 'Carnet de identidad del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El CI es obligatorio' })
  ci: string;

  @ApiProperty({
    example: 'ana.garcia@example.com',
    description: 'Correo electrónico del paciente',
  })
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email: string;

  @ApiProperty({
    example: '70012345',
    description: 'Número de teléfono',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({
    example: 'Av. Principal #123',
    description: 'Dirección del paciente',
    required: false,
  })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'Fecha de nacimiento del paciente',
  })
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser válida' })
  fechaNacimiento: string;
}
