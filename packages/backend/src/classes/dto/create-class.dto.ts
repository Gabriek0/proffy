import { ApiProperty } from '@nestjs/swagger';
import { Class } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class CreateClassDto implements Class {
  id: number;
  createdAt: Date;

  @ApiProperty()
  @IsString()
  subject: string;

  @ApiProperty()
  @IsNumber()
  cost: number;

  @ApiProperty()
  @IsNumber()
  ownerId: number;
}
