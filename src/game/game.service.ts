import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { Game } from './entities/games.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGamesDto } from './dto/update-games.dto';
import { handleError } from 'src/utils/handle.error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany({
      select: {
        id: true,
        title: true,
        imgUrl: true,
        description: true,
        year: true,
        score: true,
        traillerYtUrl: true,
        GplayYtUrl: true,
        genero: {
          select: {
            genero: true,
          },
        },
      },
    });
  }

  async findById(id: string) {
    const record = await this.prisma.game.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        imgUrl: true,
        description: true,
        year: true,
        score: true,
        traillerYtUrl: true,
        GplayYtUrl: true,
        genero: {
          select: {
            genero: true,
          },
        },
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(createGameDto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      title: createGameDto.title,
      imgUrl: createGameDto.imgUrl,
      description: createGameDto.description,
      year: createGameDto.year,
      score: createGameDto.score,
      traillerYtUrl: createGameDto.traillerYtUrl,
      GplayYtUrl: createGameDto.GplayYtUrl,
      genero: {
        connect: createGameDto.genero.map((generoId) => ({
          id: generoId,
        })),
      },
    };

    return this.prisma.game
      .create({
        data,
        select: {
          id: true,
          title: true,
          imgUrl: true,
          description: true,
          year: true,
          score: true,
          traillerYtUrl: true,
          GplayYtUrl: true,
          genero: {
            select: {
              genero: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async update(id: string, updateGameDto: UpdateGamesDto) {
    await this.findById(id);

    const data: Prisma.GameUpdateInput = {
      title: updateGameDto.title,
      imgUrl: updateGameDto.imgUrl,
      description: updateGameDto.description,
      year: updateGameDto.year,
      score: updateGameDto.score,
      traillerYtUrl: updateGameDto.traillerYtUrl,
      GplayYtUrl: updateGameDto.GplayYtUrl,
      genero: {
        connect: updateGameDto.genero.map((generoId) => ({
          id: generoId,
        })),
      },
    };

    return this.prisma.game.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        imgUrl: true,
        description: true,
        year: true,
        score: true,
        traillerYtUrl: true,
        GplayYtUrl: true,
        genero: {
          select: {
            genero: true,
          },
        },
      },
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }
}
