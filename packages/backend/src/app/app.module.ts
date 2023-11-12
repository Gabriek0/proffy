import { Module } from '@nestjs/common';
import { ClassesModule } from '../classes/class.module';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UserModule, ClassesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
