import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGamesDto } from './dto/update-games.dto';
import { handleError } from 'src/utils/handle.error.util';
import { Prisma } from '@prisma/client';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GameService {
  private gameSelect = {
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
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany({
      select: this.gameSelect,
    });
  }

  async findById(id: string) {
    const record = await this.prisma.game.findUnique({
      where: { id },
      select: this.gameSelect,
    });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(user: User, createGameDto: CreateGameDto) {
    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

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
        select: this.gameSelect,
      })
      .catch(handleError);
  }

  async update(user: User, id: string, updateGameDto: UpdateGamesDto) {
    await this.findById(id);

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

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
      select: this.gameSelect,
    });
  }

  async delete(user: User, id: string) {
    await this.findById(id);

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

    await this.prisma.game.delete({ where: { id } });
  }
}
