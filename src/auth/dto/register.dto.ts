import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'usuario@clinica.com',
    description: 'Correo electrónico del usuario',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'RECEPCIONISTA',
    description: 'Rol del usuario',
    enum: ['RECEPCIONISTA', 'MEDICO', 'GERENCIA'],
  })
  @IsIn(['RECEPCIONISTA', 'MEDICO', 'GERENCIA'])
  role: string;
}
