import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePerfilDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty({description: 'Nome do perfil de usuário', example: 'Perfil 1: Fulano123, Perfil 2: Cicrano321, etc'})
  title: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'Imagem do perfil de usuário', example: 'Qualquer imagem de escolha do usuário, tanto web quanto local.'})
  imgUrl: string;

  
}
