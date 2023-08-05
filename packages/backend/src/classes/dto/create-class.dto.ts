import { Class } from '@prisma/client';

export class CreateClassDto implements Class {
  id: number;
  subject: string;
  cost: number;
  ownerId: number;
  createdAt: Date;
}
