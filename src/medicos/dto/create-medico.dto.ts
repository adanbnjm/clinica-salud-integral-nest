import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicoDto {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({
    example: 'Pérez',
    description: 'Apellido paterno del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El apellido paterno es obligatorio' })
  apellidoPaterno: string;

  @ApiPropertyOptional({
    example: 'Gómez',
    description: 'Apellido materno del médico',
  })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @ApiProperty({
    example: '70012345',
    description: 'Teléfono del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la especialidad del médico',
  })
  @IsInt({ message: 'La especialidad debe ser un número entero' })
  especialidadId: number;
}
