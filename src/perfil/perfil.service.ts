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

  create(createPerfilDto: CreatePerfilDto) {
    const data: Prisma.PerfilCreateInput = {
      title: createPerfilDto.title,
      imgUrl: createPerfilDto.imgUrl,
      user: {
        connect: {
          id: createPerfilDto.userId,
        },
      },
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
          id: true,
          imgUrl: true,
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
      })
      .catch(handleError);
  }

  update(id: string, updatePerfilDto: UpdatePerfilDto) {
    this.findById(id);
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
