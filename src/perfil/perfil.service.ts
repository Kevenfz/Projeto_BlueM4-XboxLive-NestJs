import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Perfil[]> {
    return this.prisma.perfil.findMany();
  }

  async findById(id: string): Promise<Perfil> {
    const record = await this.prisma.perfil.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o id:${id} não encontrado.`);
    }

    return record;
  }

  create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {

    const perfil: Perfil = { ...createPerfilDto };
    return this.prisma.perfil
      .create({
        data: perfil,
      })
      .catch(this.handleError);
  }

  async update(id: string, updatePerfilDto: UpdatePerfilDto): Promise<Perfil> {
    await this.findById(id);

    const data: Partial<Perfil> = { ...updatePerfilDto };

    return this.prisma.perfil.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.perfil.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    return undefined;
  }
}
