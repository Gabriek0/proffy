import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

type FindAllParams = {
  weekDay?: number;
  subject?: string;
  time?: number;
};

@Injectable()
export class ClassService {
  constructor(private readonly prisma: DatabaseService) {}

  create(data: CreateClassDto) {
    return this.prisma.class.create({ data });
  }

  async update(id: number, data: UpdateClassDto) {
    await this.prisma.class.updateMany({
      data: { ...data },
      where: {
        id,
      },
    });
  }

  delete(id: number) {
    return this.prisma.class.delete({ where: { id } });
  }

  findAll(params: FindAllParams) {
    const { subject, weekDay, time } = params;

    return this.prisma.class.findMany({
      include: { owner: true },
      where: {
        subject: {
          contains: subject ? subject : undefined,
        },
        ClassSchedules: {
          some: {
            weekDay: {
              gte: weekDay ? Number(weekDay) : undefined,
              lte: weekDay ? Number(weekDay) : undefined,
            },
            from: {
              gte: time ? Number(time) : undefined,
            },
            to: {
              lte: time ? Number(time) : undefined,
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.class.findFirst({ where: { id } });
  }
}
