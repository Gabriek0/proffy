import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthUserDTO } from './dto/auth-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

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
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      throw new UnauthorizedException('Password do not match');
    }

    const payload = { sub: user.id, name: user.name };
    const accessToken = await this.jwtService.signAsync(payload);

    const response: IResponse = {
      user: {
        email: user.email,
        name: user.name,
      },
      accessToken,
    };

    return response;
  }
}
