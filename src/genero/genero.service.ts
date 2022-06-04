import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { handleError } from 'src/utils/handle.error.util';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async findById(id: string): Promise<Genero> {
    const record = await this.prisma.genero.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(user: User, createGeneroDto: CreateGeneroDto): Promise<Genero> {

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Tipo de conta não é Admin',
      );
    }

    const genero = { ...createGeneroDto };
    return this.prisma.genero
      .create({
        data: genero,
      })
      .catch(handleError);
  }

  async update(
    user: User,
    id: string,
    updateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    await this.findById(id);

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

    const data = { ...updateGeneroDto };

    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  async delete(user: User, id: string) {
    await this.findById(id);

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

    await this.prisma.genero.delete({ where: { id } });
  }
}
