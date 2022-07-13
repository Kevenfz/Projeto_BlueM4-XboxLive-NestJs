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
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@ApiTags('perfil')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('perfil')
export class PerfilController {
  constructor(private perfilService: PerfilService) {}

  @Get('/find-all')
  @ApiOperation({ summary: 'Listar todos os Perfis' })
  findAll() {
    return this.perfilService.findAll();
  }

  @Get('/findById/:id')
  @ApiOperation({ summary: 'Buscar Perfis pelo seu ID' })
  findById(@Param('id') id: string) {
    return this.perfilService.findById(id);
  }

  @Post('/reg-profile')
  @ApiOperation({ summary: 'Criar um Perfil' })
  create(@LoggedUser() user: User, @Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(user.id, createPerfilDto);
  }

  @Patch('/updateById/:id')
  @ApiOperation({
    summary:
      'Atualizar um Perfil pelo seu ID. Possibilidade de remover os jogos favoritados',
  })
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(id, updatePerfilDto);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um Perfil pelo seu ID' })
  delete(@Param('id') id: string) {
    this.perfilService.delete(id);
  }
}
