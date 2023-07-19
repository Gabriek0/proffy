import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDTO extends User {
  @ApiProperty({
    example: 'John Doe',
    description: 'Username',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'example@example.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password@_exampl3',
    minimum: 4,
    maximum: 20,
    required: true,
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Your password is too weak',
  })
  password: string;
}
