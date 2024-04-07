import { Injectable, OnModuleInit } from "@nestjs/common"; //onmoduleinit es para ejecutar codigo apenas se ejecute
import { PrismaClient } from "@prisma/client";

//inyectable para utilizarlo en varios lados 
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async  onModuleInit() {
        await this.$connect();
    }
}