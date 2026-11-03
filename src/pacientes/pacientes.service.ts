import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerPacientes(query?: string, pagina = 1, limite = 10) {
    const texto = query?.trim();
    const paginaSegura = Math.max(1, pagina);
    const limiteSeguro = Math.min(100, Math.max(1, limite));

    const where = texto
      ? {
          OR: [
            { nombre: { contains: texto, mode: 'insensitive' as const } },
            {
              apellidoPaterno: {
                contains: texto,
                mode: 'insensitive' as const,
              },
            },
            {
              apellidoMaterno: {
                contains: texto,
                mode: 'insensitive' as const,
              },
            },
            { email: { contains: texto, mode: 'insensitive' as const } },
            { telefono: { contains: texto, mode: 'insensitive' as const } },
            { ci: { contains: texto, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [pacientes, total] = await Promise.all([
      this.prisma.paciente.findMany({
        where,
        skip: (paginaSegura - 1) * limiteSeguro,
        take: limiteSeguro,
        orderBy: { id: 'asc' },
      }),
      this.prisma.paciente.count({ where }),
    ]);

    return {
      data: pacientes,
      total,
      pagina: paginaSegura,
      totalPaginas: Math.ceil(total / limiteSeguro),
    };
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
