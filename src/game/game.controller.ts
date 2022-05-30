import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGamesDto } from './dto/update-games.dto';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogos' })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar jogos pelo seu ID' })
  findById(@Param('id') id: string): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um jogo' })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um jogo pelo seu ID' })
  update(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGamesDto,
  ): Promise<Game> {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um jogo pelo seu ID' })
  delete(@Param('id') id: string) {
    this.gameService.delete(id);
  }
}
