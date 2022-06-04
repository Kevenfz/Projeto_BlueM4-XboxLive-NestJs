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
  UseGuards,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateGamesDto } from './dto/update-games.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/users/entities/user.entity';

@ApiTags('game')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogos' })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar jogos pelo seu ID, apenas contas Admin' })
  findById(@Param('id') id: string) {
    return this.gameService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um jogo' })
  create(@LoggedUser() user: User, @Body() createGameDto: CreateGameDto) {
    return this.gameService.create(user, createGameDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um jogo pelo seu ID, apenas contas Admin' })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGamesDto,
  ) {
    return this.gameService.update(user, id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um jogo pelo seu ID, apenas contas Admin' })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.gameService.delete(user, id);
  }
}
