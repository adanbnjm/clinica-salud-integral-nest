import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido paterno es obligatorio' })
  apellidoPaterno: string;

  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string;

  @IsInt({ message: 'La especialidad debe ser un número entero' })
  especialidadId: number;
}
