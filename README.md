CLINICA DE SALUD INTEGRAL
api rest para la gestion de una clinica de salud integral migrada a nestjs, typescript, prisma y postgresql

el proyecto incluye autenticacion mediante jwt autorizacion por roles,validacion de datos,documentacion con swagger,manejo de errores de prisma y el logging de las peticiones http

tecnologias utilizadas

- nestjs
- typescript
- prisma orm
- postgresql
- jwt
- bcryptjs
- class-validator
- class-transformer
- swagger
- joi pnpm

requisitos
antes de ejecutar este proyecto se necesita tener instalado

- nodejs
- - pnpm
- postgresql

instalacion
clonar el repositorio e instalar las dependencias

pnpm install

variables de entorno
crear un arcivo .env en la raiz del proyecto
por ejemplo

DATABASE_URL="postgresql://usuario:password@localhost:5432/clinica_salud_integral?schema=public"
JWT_SECRET="tu_secreto_jwt_de_al_menos_10_caracteres"
PORT=3000

tambien esta el .env.example con valores de ejemplo
el .env tiene archivos reales y ese no se sube al repositorio

ejecutar el proyecto

pnpm start:dev

swagger
la documentacion de la api esta en
http://localhost:3000/api/docs
desde swagger se pueden consultar y probar los diferentes endpoints de la api.

autenticacion
la api utiliza jwt para proteger los endpoints que requieren autenticacion

los roles que tenemos son

- RECEPCIONISTA
- MEDICO
- GERENCIA

guards
los guards se encargan de aprobar la autenticacion y autorizacion antes de permitir acceso a un endpoint protegido
jwtauthguard verifica que el token jwt sea valido
rolesguard comprueba el rol del usuario cuando el endpoint tiene permisos definidos mediante roles
Se realizó una petición utilizando un pacienteId que no existe:

pruebas realizadas

- paciente inexistente
  {
  "pacienteId": 999,
  "medicoId": 1,
  "fechaHora": "2026-09-26T14:00:00.000Z",
  "estado": "PROGRAMADA"
  }

Resultado:

404 Not Found

Respuesta:

{
"message": "El paciente no existe",
"error": "Not Found",
"statusCode": 404
}

esto demuestra que citasservice valida la existencia del paciente antes de crear la cita

- creacion de una cita

se realizo usando datos existentes

{
"pacienteId": 1,
"medicoId": 1,
"fechaHora": "2026-09-26T14:00:00.000Z",
"estado": "PROGRAMADA"
}

Resultado:

201 Created

Respuesta obtenida:

{
"id": 7,
"fechaHora": "2026-09-26T14:00:00.000Z",
"creadaEn": "2026-09-26T00:19:20.476Z",
"estado": "PROGRAMADA",
"pacienteId": 1,
"medicoId": 1
}

ademas el loggin interceptor registro la peticion

[Nest] LOG [HTTP] POST /citas - 72ms

modulos principales

auth es responsable de
registrar usuarios
el inicio de sesion
la generacion de tokens jwt
validacion de las credenciales

pacientes
responsable de la gestion de pacientes
medicos
responsable de la gestion de medicos y sus especialidades
citas
responsable de la creacion y consultas de citas medicas
prisma
es el centro de la conexion y acceso a la base de datos postgresql

scrips principales

pnpm start
pnpm start:dev
pnpm test
pnpm test:e2e

estado del cierre de esta semana
la aplicacion inicia correctamente
varables de entorno configuradas y validadas
autenticacion mediante jwt
autorizacion mediante guard y roles
logginginterceptor de manrea global
manejo de los pacientes inexistentes
creacion correcta de una cita
documentacion de los endpoints con swagger
