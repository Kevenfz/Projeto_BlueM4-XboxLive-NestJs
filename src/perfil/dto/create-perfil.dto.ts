import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreatePerfilDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty({
    description: 'Nome do perfil de usuário',
    example: 'Fulano123',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Imagem do perfil de usuário',
    example: 'Qualquer imagem de escolha do usuário, tanto web quanto local.',
  })
  imgUrl: string;

}
