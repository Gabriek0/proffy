import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: DatabaseService) {}
}
