import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    cpf: true,
    isAdmin: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ select: this.userSelect });
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ${id} não encontrado.`);
    }

    return record;
  }

  async create(createuserDto: CreateUserDto): Promise<User> {
    if (createuserDto.password != createuserDto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não conferem');
    }

    delete createuserDto.confirmPassword;

    const user: User = {
      ...createuserDto,
      password: await bcrypt.hash(createuserDto.password, 10),
    };
    return this.prisma.user
      .create({
        data: user,
        select: this.userSelect,
      })
      .catch(this.handleError);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    if (updateUserDto.password) {
      if (updateUserDto.password != updateUserDto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não conferem');
      }
    }

    delete updateUserDto.confirmPassword;

    const data: Partial<User> = { ...updateUserDto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: this.userSelect,
    });
  }

  async delete(id: string) {
    await this.findOne(id);

    await this.prisma.user.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
