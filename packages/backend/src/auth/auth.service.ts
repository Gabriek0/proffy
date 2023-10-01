import { Injectable, UnauthorizedException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthUserDTO } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn({ email, password }: AuthUserDTO): Promise<any> {
    const user = await this.userService.find(email);

    if (!user) throw new Error('User not found');

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) throw new UnauthorizedException();

    return { email, password };
  }
}
