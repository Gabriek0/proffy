import { Controller, Get } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly db: DatabaseService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('users')
  listUsers() {
    return this.db.user.findMany()
  }
}
