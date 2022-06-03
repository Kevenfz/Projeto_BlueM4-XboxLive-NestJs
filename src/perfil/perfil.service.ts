import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { handleError } from 'src/utils/handle.error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.perfil.findMany({
      select: {
        id: true,
        title: true,
        user: {
          select: {
            name: true,
          },
        },
        game: {
          select: {
            title: true,
            imgUrl: true,
            genero: {
              select: {
                genero: true,
              }
            },
          },
        },
      },
    });
  }

  findById(id: string) {
    return this.prisma.perfil.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        game: {
          select: {
            id: true,
            title: true,
            imgUrl: true,
            description: true,
            score: true,
          },
        },
      },
    });
  }

  create(userId: string, createPerfilDto: CreatePerfilDto) {
    const data: Prisma.PerfilCreateInput = {
      user: {
        connect: {
          id: userId,
        },
      },
      title: createPerfilDto.title,
      imgUrl: createPerfilDto.imgUrl,
      game: {
        connect: createPerfilDto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };

    return this.prisma.perfil
      .create({
        data,
        select: {
          user: {
            select: {
              id: true,
              name: true,
              isAdmin: true,
            },
          },
          id: true,
          imgUrl: true,
          title: true,
          game: {
            select: {
              title: true,
              imgUrl: true,
              genero: {
                select: {
                  genero: true,
                }
              },
            },
          },
        },
      })
      .catch(handleError);
  }

  async update(id: string, updatePerfilDto: UpdatePerfilDto) {
    await this.findById(id);
    const data: Prisma.PerfilUpdateInput = {
      title: updatePerfilDto.title,
      imgUrl: updatePerfilDto.imgUrl,
      game: {
        connect: updatePerfilDto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };

    return this.prisma.perfil.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            name: true,
          },
        },
        game: {
          select: {
            id: true,
            title: true,
            imgUrl: true,
            description: true,
            score: true,
          },
        },
      },
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.perfil.delete({ where: { id } });
  }
}
