import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token JWT gerado pelo login',
    example: 'TOKEN_GERADO',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário',
  })
  user: User;
}
