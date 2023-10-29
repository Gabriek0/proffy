import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Class, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ClassOwner implements User {
  @Exclude()
  id: number;

  @Exclude()
  createdAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  passwordHash: string;

  @ApiProperty()
  avatarUrl: string;

  @ApiProperty()
  whatsapp: string;

  @ApiProperty()
  bio: string;
}

@ApiExtraModels(ClassOwner)
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

  @ApiProperty({ type: () => ClassOwner })
  owner: ClassOwner;
}
