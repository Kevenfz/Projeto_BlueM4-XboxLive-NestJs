import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Genero do jogo',
    example: 'FPS, Esportes, Aventura, Terror, etc.',
  })
  genero: string;
}
