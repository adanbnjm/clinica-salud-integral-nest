import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { MedicosModule } from './medicos/medicos.module';
import { AuthModule } from './auth/auth.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().min(10).required(),
        PORT: Joi.number().default(3000),
      }),
    }),
    PrismaModule,
    PacientesModule,
    MedicosModule,
    AuthModule,
    CitasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
