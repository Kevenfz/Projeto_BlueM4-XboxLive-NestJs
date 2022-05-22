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
import { ShopGameService } from './shop-game.service';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGamesDto } from './dto/update-games.dto';

@ApiTags('shop-game')
@Controller('shop-game')
export class ShopGameController {
  constructor(private shopGameService: ShopGameService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogos' })
  findAll() {
    return this.shopGameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar jogos pelo seu ID' })
  findById(@Param('id') id: string): Promise<Game> {
    return this.shopGameService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um jogo' })
  create(@Body() createGameDto: CreateGameDto) {
    return this.shopGameService.create(createGameDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um jogo pelo seu ID' })
  update(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGamesDto,
  ): Promise<Game> {
    return this.shopGameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um jogo pelo seu ID' })
  delete(@Param('id') id: string) {
    this.shopGameService.delete(id);
  }
}
