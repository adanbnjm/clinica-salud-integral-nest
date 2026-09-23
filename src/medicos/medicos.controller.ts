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
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@ApiTags('Médicos')
@ApiBearerAuth()
@Controller('medicos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los médicos' })
  obtenerMedicos() {
    return this.medicosService.obtenerMedicos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un médico por ID' })
  async findOne(@Param('id') id: string) {
    const medico = await this.medicosService.findOne(Number(id));

    if (!medico) {
      throw new NotFoundException('Medico no encontrado');
    }

    return medico;
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo médico' })
  create(@Body() dto: CreateMedicoDto) {
    return this.medicosService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza un médico por ID' })
  update(@Param('id') id: string, @Body() dto: UpdateMedicoDto) {
    return this.medicosService.update(Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un médico por ID' })
  remove(@Param('id') id: string) {
    return this.medicosService.remove(Number(id));
  }
}
