import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
    exports: [AuthService],
})
export class AuthModule {}
