import { Injectable} from "@nestjs/common";
import { Usuarios } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()

export class UsuarioService {

    constructor (private prisma:PrismaService){}

    //metodos para llamar de la base de datos 

    //obtener tareas
    async getAllTasks():Promise<Usuarios[]>{
        return await this.prisma.usuarios.findMany();
    }
    async getTaskById(id:number):Promise<Usuarios>{
        return await this.prisma.usuarios.findUnique({
            where:{
                id
            }
        });
    }

    async createTask(data:Usuarios):Promise<Usuarios>{
        return await this.prisma.usuarios.create({
            data
        });
    }

    async  updateTask(id: number, data:Usuarios):Promise<Usuarios>{
        return await this.prisma.usuarios.update({
            where:{
                id
            },
            data
        })
    }

    async deleteTask(id:number): Promise<Usuarios> {
        return await this.prisma.usuarios.delete({
            where:{
                id
            }
        })
    }
    
}