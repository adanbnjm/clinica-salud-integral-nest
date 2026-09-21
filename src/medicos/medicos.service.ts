import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicosService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerMedicos() {
    return this.prisma.medico.findMany();
  }
}
