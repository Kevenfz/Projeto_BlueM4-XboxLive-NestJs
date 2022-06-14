import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle.error.util';

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

  async findAll(user: User): Promise<User[]> {
    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

    return await this.prisma.user.findMany({ select: this.userSelect });
  }

  async findOne(user: User, id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!user.isAdmin) {
      throw new UnauthorizedException(
        'Acesso negado: Sua conta não é do tipo Admin!',
      );
    }

    if (!record) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return record;
  }

  //

  async create(createuserDto: CreateUserDto): Promise<User> {
    if (createuserDto.password !== createuserDto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não conferem');
    }

    delete createuserDto.confirmPassword;

    const data: User = {
      ...createuserDto,
      password: await bcrypt.hash(createuserDto.password, 10),
    };

    return this.prisma.user
      .create({
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  //

  async update(
    user: User,
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    await this.findOne(user, id);

    if (updateUserDto.password) {
      if (updateUserDto.password !== updateUserDto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não conferem');
      }
    }

    delete updateUserDto.confirmPassword;

    const data: Partial<User> = {
      ...updateUserDto,
      isAdmin: updateUserDto.isAdmin,
    };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: this.userSelect,
    });
  }

  //

  async delete(id: string) {
    await this.prisma.perfil.deleteMany({
      where: {
        userId: id,
      },
    });

    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
