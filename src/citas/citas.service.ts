import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PacientesService } from '../pacientes/pacientes.service';
import type { EstadoCita } from '../../generated/prisma/client';

@Injectable()
export class CitasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pacientesService: PacientesService,
  ) {}

  async create(data: {
    pacienteId: number;
    medicoId: number;
    fechaHora: string;
    estado?: 'PROGRAMADA' | 'COMPLETADA' | 'CANCELADA';
  }) {
    const paciente = await this.pacientesService.findOne(data.pacienteId);

    if (!paciente) {
      throw new NotFoundException('El paciente no existe');
    }

    return this.prisma.cita.create({
      data: {
        pacienteId: data.pacienteId,
        medicoId: data.medicoId,
        fechaHora: new Date(data.fechaHora),
        ...(data.estado && { estado: data.estado }),
      },
    });
  }

  async findAll() {
    return this.prisma.cita.findMany();
  }

  async findPaginadas(pagina: number, porPagina: number, estado?: EstadoCita) {
    const where = estado ? { estado } : {};

    const [citas, total] = await Promise.all([
      this.prisma.cita.findMany({
        where,
        skip: (pagina - 1) * porPagina,
        take: porPagina,
        orderBy: {
          id: 'desc',
        },
      }),
      this.prisma.cita.count({ where }),
    ]);

    return {
      data: citas,
      total,
      pagina,
      totalPaginas: Math.ceil(total / porPagina),
    };
  }
  async actualizarEstado(id: number, estado: EstadoCita) {
    const cita = await this.prisma.cita.findUnique({
      where: { id },
    });

    if (!cita) {
      throw new NotFoundException('Cita no encontrada');
    }

    return this.prisma.cita.update({
      where: { id },
      data: { estado },
    });
  }
}
