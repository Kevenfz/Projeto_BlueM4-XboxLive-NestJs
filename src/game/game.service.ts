import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGamesDto } from './dto/update-games.dto';
import { handleError } from 'src/utils/handle.error.util';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };
    return this.prisma.game
      .create({
        data: game,
      })
      .catch(handleError);
  }

  async update(id: string, updateGameDto: UpdateGamesDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }
}

3
