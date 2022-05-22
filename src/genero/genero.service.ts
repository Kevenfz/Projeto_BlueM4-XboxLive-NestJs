import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto } from './dto/update-genero.dto';

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

  create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero: Genero = { ...createGeneroDto };
    return this.prisma.genero
      .create({
        data: genero,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    await this.findById(id);

    const data: Partial<Genero> = { ...updateGeneroDto };

    return this.prisma.genero.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.genero.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    return undefined;
  }
}
