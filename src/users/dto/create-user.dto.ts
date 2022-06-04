import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Matches,
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
  @IsString()
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

  @IsString()
  @IsNotEmpty()
  @Matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/, {
    message: 'Formato CPF inválido'
  })
  @ApiProperty({
    description: 'CPF do usuário',
    example: '111.222.333-44',
  })
  cpf: string;


  @ApiProperty({
    required: false,
    default: false,
    example: false,
  })
  isAdmin?: boolean;
}
