import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthUserDTO } from './dto/auth-user.dto';

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn({ email, password }: AuthUserDTO): Promise<IResponse> {
    const user = await this.userService.find(email);

    if (!user) throw new Error('User not found');

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) throw new UnauthorizedException();

    const payload = { sub: user.id, name: user.name };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    };
  }
}
