import { Controller, Get } from '@nestjs/common';
import { PacientesService } from './pacientes.service';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  obtenerPacientes() {
    return this.pacientesService.obtenerPacientes();
  }
}
