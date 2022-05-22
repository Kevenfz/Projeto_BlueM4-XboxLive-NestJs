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
} from 'class-validator';
import {Type} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: 'Titulo do jogo.', example: 'GTA 5'})
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: 'Imagem de capa do jogo.'})
  imgUrl: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1300, {
    message: 'Description is too long!',
  })
  @ApiProperty({description: 'Descrição do jogo.'})
  description: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @ApiProperty({description: 'Ano de lançamento do jogo.'})
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
  @ApiProperty({description: 'Nota de avaliação do jogo', example: '0 para Odiei, 3 para Razoável, 5 para Jogo F@#$.'})
  score: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: 'Link do Trailler do jogo, apenas do YouTube.'})
  traillerYtUrl: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: 'Link da Gameplay do jogo, apenas do YouTube.'})
  GplayYtUrl: string;
}
