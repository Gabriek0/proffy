import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { DatabaseService } from '../database/database.service';
import { CreateUserDTO } from './dto/create-user.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(user: CreateUserDTO): Promise<User> {
    const passwordHash = await bcrypt.hash(user.password, SALT_ROUNDS);

    const userCreated = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        passwordHash,
      },
    });

    return userCreated;
  }
}
