import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@ApiTags('Class')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Body() body: CreateClassDto) {
    return this.classService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateClassDto) {
    return this.classService.update(id, body);
  }
}
