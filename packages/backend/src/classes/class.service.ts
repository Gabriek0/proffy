import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: DatabaseService) { }

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

  findAll({ subject, time, weekDay }: { weekDay?: number, subject?: string, time?: number }) {
    return this.prisma.class.findMany({
      include: { owner: true }, where: {
        subject,
        ClassSchedules: {
          every: {
            weekDay,
            from: {
              gte: time,
              lte: time
            }
          }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.class.findFirst({ where: { id } });
  }
}
