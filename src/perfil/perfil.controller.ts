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
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@ApiTags('perfil')
@Controller('perfil')
export class PerfilController {
  constructor(private perfilService: PerfilService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os Perfis' })
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Perfis pelo seu ID' })
  findById(@Param('id') id: string): Promise<Perfil> {
    return this.perfilService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um Perfil' })
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(createPerfilDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um Perfil pelo seu ID' })
  update(
    @Param('id') id: string,
    @Body() updatePerfilDto: UpdatePerfilDto,
  ): Promise<Perfil> {
    return this.perfilService.update(id, updatePerfilDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um Perfil pelo seu ID' })
  delete(@Param('id') id: string) {
    this.perfilService.delete(id);
  }
}
