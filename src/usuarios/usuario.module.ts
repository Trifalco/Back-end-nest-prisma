import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsuarioService } from "./ususario.service";
import { UsuarioController } from "./usuario.controller";

@Module({
    imports:[PrismaModule],
    providers:[UsuarioService],
    controllers:[UsuarioController]
})

export class UsuarioModule {

}