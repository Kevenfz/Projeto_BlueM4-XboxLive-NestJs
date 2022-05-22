import { Module } from '@nestjs/common';
import { ShopGameService } from './shop-game.service';
import { ShopGameController } from './shop-game.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ShopGameService],
  controllers: [ShopGameController]
})
export class ShopGameModule {}

