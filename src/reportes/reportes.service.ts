import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportesService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerCitasPorEspecialidad() {
    const especialidades = await this.prisma.especialidad.findMany({
      select: {
        nombre: true,
        medicos: {
          select: {
            citas: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    return especialidades.map((especialidad) => ({
      especialidad: especialidad.nombre,
      total: especialidad.medicos.reduce(
        (total, medico) => total + medico.citas.length,
        0,
      ),
    }));
  }
}