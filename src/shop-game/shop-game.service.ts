import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGamesDto } from './dto/update-games.dto';

@Injectable()
export class ShopGameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.games.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.games.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game: Game = { ...createGameDto };
    return this.prisma.games
      .create({
        data: game,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateGameDto: UpdateGamesDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.games.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.games.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    return undefined;
  }
}
