import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MedicosService } from './medicos.service';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Get()
  obtenerMedicos() {
    return this.medicosService.obtenerMedicos();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const medico = await this.medicosService.findOne(Number(id));

    if (!medico) {
      throw new NotFoundException('Medico no encontrado');
    }

    return medico;
  }
  @Post()
  create(@Body() body: any) {
    return this.medicosService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.medicosService.update(Number(id), body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicosService.remove(Number(id));
  }
}
