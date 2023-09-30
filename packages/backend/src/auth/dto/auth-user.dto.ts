import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { AuthUser } from '../entities/auth-user.entity';

export class AuthUserDTO implements AuthUser {
  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'example@example.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password@_exampl3',
    minimum: 4,
    maximum: 20,
    required: true,
  })
  password: string;
}
