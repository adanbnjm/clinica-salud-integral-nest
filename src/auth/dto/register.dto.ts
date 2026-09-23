import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'usuario@clinica.com',
    description: 'Correo electrónico del usuario',
  })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  password: string;

  @ApiProperty({
    example: 'RECEPCIONISTA',
    description: 'Rol del usuario',
    enum: ['RECEPCIONISTA', 'MEDICO', 'GERENCIA'],
  })
  role: string;
}
