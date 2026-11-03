import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateEstadoCitaDto } from './dto/update-estado-cita.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/decorators/roles/roles.decorator';
import type { EstadoCita } from '../../generated/prisma/client';

@ApiTags('Citas')
@ApiBearerAuth()
@Controller('citas')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  @ApiOperation({ summary: 'Crea una nueva cita' })
  create(@Body() dto: CreateCitaDto) {
    return this.citasService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas las citas' })
  findAll() {
    return this.citasService.findAll();
  }

  @Get('historial')
  @ApiOperation({ summary: 'Lista las citas de forma paginada' })
  findHistorial(
    @Query('pagina', new DefaultValuePipe(1), ParseIntPipe) pagina: number,
    @Query('porPagina', new DefaultValuePipe(10), ParseIntPipe)
    porPagina: number,
    @Query('estado') estado?: EstadoCita,
  ) {
    return this.citasService.findPaginadas(pagina, porPagina, estado);
  }

  @Patch(':id/estado')
  @ApiOperation({ summary: 'Actualiza el estado de una cita' })
  actualizarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEstadoCitaDto,
  ) {
    return this.citasService.actualizarEstado(id, dto.estado);
  }
}
