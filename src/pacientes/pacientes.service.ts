import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerPacientes() {
    return this.prisma.paciente.findMany();
  }

  async findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    const fechaNacimiento = new Date(data.fechaNacimiento);

    if (fechaNacimiento > new Date()) {
      throw new BadRequestException(
        'La fecha de nacimiento no puede ser futura',
      );
    }

    return this.prisma.paciente.create({
      data,
    });
  }
  async update(id: number, data: any) {
    if (data.fechaNacimiento) {
      const fechaNacimiento = new Date(data.fechaNacimiento);

      if (fechaNacimiento > new Date()) {
        throw new BadRequestException(
          'La fecha de nacimiento no puede ser futura',
        );
      }
    }

    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}
