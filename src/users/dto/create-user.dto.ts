import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Fulano Sicrano de Beltrano',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'fulanosicrano@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Senha de usuário para login',
    example: 'Batatinha@12345',
  })
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca!',
  })
  password: string;

  @ApiProperty({ description: 'Confirmação da Senha do usuário para o login' })
  confirmPassword: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'CPF do usuário',
    example: 'Onze caracteres: 12345678910',
  })
  cpf: number;

  @IsString()
  @ApiProperty({
    description: 'Usuário administrador',
    example: 'Todas permissões de controle liberadas para usuários administradores',
  })
  isAdmin: string;
}
