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
  @IsString()
  @ApiProperty({
    example: 'John Doe',
    description: 'Username',
    required: true,
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'example@example.com',
    required: true,
  })
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Your password is too weak',
  })
  @ApiProperty({
    description: 'User password',
    example: 'Ex4mple_strong_password@',
    minimum: 4,
    maximum: 20,
    required: true,
  })
  password: string;
}
