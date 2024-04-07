import {BadRequestException, Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import { UsuarioService } from './ususario.service';
import { Usuarios } from '@prisma/client';

@Controller('usuario')
export class UsuarioController {
    

    constructor(private readonly taksService:UsuarioService){ }

    @Get()
    async getAllTasks(){
        return this.taksService.getAllTasks();
    }

    @Post()
    async createTask(@Body() data:Usuarios){
        return this.taksService.createTask(data);
    }

    @Get(':id')
    async getTaskById(@Param('id') id:string){
        const taskfound = await this.taksService.getTaskById(Number(id))//me convierte cualquier valor ingresado a numero 

        if(!taskfound)throw new BadRequestException('El heroe no existe')

        return taskfound
        
    }

    @Delete(':id')
    async deleteTask(@Param('id') id:string){
        try{
            return await this.taksService.deleteTask(Number(id))
        }catch(error){

            throw new BadRequestException('La tarea no existe')


        }
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() data: Usuarios){
        try {
            return await this.taksService.updateTask(Number(id),data)
        } catch (error) {
            
            throw new BadRequestException('La tarea no existe.')
        }
    }
}