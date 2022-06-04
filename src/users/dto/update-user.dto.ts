import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PickType(CreateUserDto, ['name', 'password', 'confirmPassword', 'isAdmin'] as const) {}
