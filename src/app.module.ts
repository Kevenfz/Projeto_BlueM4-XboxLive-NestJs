import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopGameModule } from './shop-game/shop-game.module';

@Module({
  imports: [ShopGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
