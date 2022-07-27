import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';
import { CreatePerfilDto } from './create-perfil.dto';


export class UpdatePerfilDto extends OmitType(CreatePerfilDto, ['games'] as const) {}

// export class UpdatePerfilDto {
//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(15)
//   @ApiProperty({
//     description: 'Nome do perfil de usuário',
//     example: 'Fulano123',
//   })
//   title?: string;

//   @IsString()
//   @IsNotEmpty()
//   @ApiProperty({
//     description: 'Imagem do perfil de usuário',
//     example: 'Qualquer imagem de escolha do usuário, tanto web quanto local.',
//   })
//   imgUrl?: string;

//   // @IsUUID(undefined, { each: true })
//   // @ApiProperty({
//   //   description: 'Lista com os IDs dos produtos',
//   //   example:
//   //     '["186a7c97-a030-4737-b318-59ae048d0052", "ea4999af-0ced-4e11-abeb-8bf0de0c5d36"]',
//   // })
//   // games?: string[];
// }
