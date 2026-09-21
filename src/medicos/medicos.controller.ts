import { Controller, Get } from '@nestjs/common';
import { MedicosService } from './medicos.service';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Get()
  obtenerMedicos() {
    return this.medicosService.obtenerMedicos();
  }
}
