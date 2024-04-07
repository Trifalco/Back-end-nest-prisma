import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsuarioModule } from './usuarios/usuario.module';


@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
