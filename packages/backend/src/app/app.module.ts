import { Module } from '@nestjs/common';

import { ClassesModule } from '../classes/class.module';
import { DatabaseModule } from '../database/database.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UserModule, ClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
