import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/decorators/roles/roles.decorator';
import { ReportesService } from './reportes.service';

@ApiTags('Reportes')
@ApiBearerAuth()
@Controller('reportes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA', 'GERENCIA')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Get('especialidades')
  @ApiOperation({ summary: 'Cuenta las citas por especialidad médica' })
  obtenerCitasPorEspecialidad() {
    return this.reportesService.obtenerCitasPorEspecialidad();
  }
}
