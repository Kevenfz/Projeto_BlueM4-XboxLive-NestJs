import { Module } from '@nestjs/common';
import { ShopGameService } from './shop-game.service';
import { ShopGameController } from './shop-game.controller';

@Module({
  providers: [ShopGameService],
  controllers: [ShopGameController]
})
export class ShopGameModule {}
