import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/reg-user')
  @ApiOperation({summary: 'Criar um usuário'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/find-all')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({summary: 'Listar todos os usuários, apenas contas Admin'})
  findAll(@LoggedUser() user: User) {
    return this.userService.findAll(user);
  }

  @Get('/findById/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({summary: 'Listar um usuário pelo seu ID, apenas contas Admin'})
  findOne(@LoggedUser() user: User, @Param('id') id: string) {
    return this.userService.findOne(user, id);
  }

  @Patch('/updateById/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({summary: 'Atualizar um usuário pelo seu ID, apenas contas Admin'})
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(user, id, updateUserDto);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({summary: 'Deletar um usuário pelo seu ID, apenas contas Admin'})
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
