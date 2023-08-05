import { Controller, Post } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create() {
    return 'ok';
  }
}
