import { Module } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';

@Module({
  controllers: [FavoritosController],
  providers: [FavoritosService]
})
export class FavoritosModule {}
