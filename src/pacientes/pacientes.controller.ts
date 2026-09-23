import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/decorators/roles/roles.decorator';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@ApiTags('Pacientes')
@ApiBearerAuth()
@Controller('pacientes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los pacientes' })
  obtenerPacientes() {
    return this.pacientesService.obtenerPacientes();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un paciente por ID' })
  async findOne(@Param('id') id: string) {
    const paciente = await this.pacientesService.findOne(Number(id));

    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado');
    }

    return paciente;
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo paciente' })
  create(@Body() dto: CreatePacienteDto) {
    return this.pacientesService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza un paciente por ID' })
  update(@Param('id') id: string, @Body() dto: UpdatePacienteDto) {
    return this.pacientesService.update(Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un paciente por ID' })
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(Number(id));
  }
}
