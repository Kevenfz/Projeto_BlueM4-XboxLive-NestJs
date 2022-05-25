import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
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

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'fulanosicrano@gmail.com',
  })
  email: string;

  @IsString()
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
  @IsNotEmpty()
  @ApiProperty({
    description: 'CPF do usuário',
    example: 'xxx.xxx.xxx-xx',
  })
  cpf: number;
}
