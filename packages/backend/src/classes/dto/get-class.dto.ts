import { ApiProperty } from '@nestjs/swagger';
import { Class } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class GetClassDto implements Class {
  constructor(data: Class) {
    Object.assign(this, data);
  }

  @ApiProperty()
  @Exclude()
  id: number;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  @Exclude()
  createdAt: Date;
}
