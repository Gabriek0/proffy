import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  // Dependency injection
  constructor(private readonly UserService: UserService) {}

  @Post('')
  createUser(@Body() user: CreateUserDTO) {
    return this.UserService.createUser(user);
  }
}
