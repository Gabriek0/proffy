import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';

import { CreateUserDTO } from './dto/create-user.dto';

import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(user: CreateUserDTO): Promise<User> {
    const passwordHash = await bcrypt.hash(user.password, 10);

    const user_created = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        passwordHash: passwordHash,
      },
    });

    return user_created;
  }
}
