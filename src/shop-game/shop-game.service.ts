import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';

@Injectable()
export class ShopGameService {
  games: Game[] = [];

  @Get()
  findAll(): Game[] {
    return this.games;
  }

  @Get()
  gameById() {}

  @Post()
  create(createGameDto: CreateGameDto): Game {
    const game: Game = { id: 'id_aleatório', ...createGameDto };
    this.games.push(game);
    return game;
  }

  @Put()
  updateGame() {}

  @Delete()
  deleteGame() {}
}
