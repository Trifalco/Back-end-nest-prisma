import { RickandmortyService } from './rickandmorty.service';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsuarioModule } from './usuarios/usuario.module';


@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    RickandmortyService,],
})
export class AppModule { }
