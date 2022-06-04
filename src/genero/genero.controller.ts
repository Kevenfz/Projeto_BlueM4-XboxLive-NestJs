import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entities';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/users/entities/user.entity';

@ApiTags('genero')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os generos' })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar generos pelo seu ID' })
  findById(@Param('id') id: string): Promise<Genero> {
    return this.generoService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um genero' })
  create(@LoggedUser() user: User, @Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(user, createGeneroDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um genero pelo seu ID' })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() updateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return this.generoService.update(user, id, updateGeneroDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um genero pelo seu ID' })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.generoService.delete(user, id);
  }
}
