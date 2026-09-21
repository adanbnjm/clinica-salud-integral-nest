import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicosService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerMedicos() {
    return this.prisma.medico.findMany();
  }

  async findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.medico.create({
      data,
    });
  }

  async update(id: number, data: any) {
    return this.prisma.medico.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.medico.delete({
      where: { id },
    });
  }
}
