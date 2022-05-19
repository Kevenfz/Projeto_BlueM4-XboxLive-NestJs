import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ShopGameService } from './shop-game.service';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shop-game')
@Controller('shop-game')
export class ShopGameController {
  constructor(private shopGameService: ShopGameService) {}

  @Get()
  findAll(): Game[] {
    return this.shopGameService.findAll();
  }

  @Get()
  gameById() {}

  @Post()
  create(@Body() createGameDto: CreateGameDto): Game {
    return this.shopGameService.create(createGameDto);
  }

  @Put()
  updateGame() {}

  @Delete()
  deleteGame() {}
}
