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

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Lista com os IDs dos Jogos',
    example:
      '["186a7c97-a030-4737-b318-59ae048d0052", "ea4999af-0ced-4e11-abeb-8bf0de0c5d36"]',
  })
  games: string[];
}
