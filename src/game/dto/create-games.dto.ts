import {
  IsNumber,
  Min,
  Max,
  MaxLength,
  MinLength,
  IsPositive,
  IsNotEmpty,
  IsString,
  IsDate,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Titulo do jogo.', example: 'GTA 5' })
  title: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'Imagem de capa do jogo.',
    example:
      'https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg',
  })
  imgUrl: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1300, {
    message: 'Description is too long!',
  })
  @ApiProperty({
    description: 'Descrição do jogo.',
    example: 'Jogo de ação em mundo aberto, modo online sobrevivência, fps...',
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Ano de lançamento do jogo.',
    example: '17/10/2013',
  })
  year: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0, {
    message: 'Send your grade, betwen 0 and 5.',
  })
  @Max(5, {
    message: 'Send your grade, betwen 0 and 5.',
  })
  @IsPositive()
  @ApiProperty({
    description: 'Nota de avaliação do jogo',
    example: '0 para Odiei, 3 para Razoável, 5 para Jogo F@#$.',
  })
  score: number;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'Link do Trailler do jogo, apenas do YouTube.',
    example: 'https://www.youtube.com/watch?v=QkkoHAzjnUs',
  })
  traillerYtUrl: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'Link da Gameplay do jogo, apenas do YouTube.',
    example: 'https://www.youtube.com/watch?v=gHtKJ9cWCaA',
  })
  GplayYtUrl: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Genero do jogo',
    example: '["186a7c97-a030-4737-b318-59ae048d0052", "ea4999af-0ced-4e11-abeb-8bf0de0c5d36"]',
  })
  genero: string[];
}
