import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopGameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { GeneroModule } from './genero/genero.module';
import { UsersModule } from './users/users.module';
import { PerfilModule } from './perfil/perfil.module';

@Module({
  imports: [ShopGameModule, PrismaModule, GeneroModule, UsersModule, PerfilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
