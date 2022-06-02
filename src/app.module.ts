import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopGameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { GeneroModule } from './genero/genero.module';
import { UsersModule } from './users/users.module';
import { PerfilModule } from './perfil/perfil.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ShopGameModule, PrismaModule, GeneroModule, UsersModule, PerfilModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
