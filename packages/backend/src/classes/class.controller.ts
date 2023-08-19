import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { GetClassDto } from './dto/get-class.dto';
import { GetManyClassDto } from './dto/get-many-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@ApiTags('Class')
@Controller('class')
@UseInterceptors(ClassSerializerInterceptor)
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

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result = await this.classService.findOne(id);

    if (!result) {
      throw new NotFoundException();
    }

    return new GetClassDto(result);
  }

  @Get()
  async findAll() {
    const result = await this.classService.findAll();

    if (!result) {
      throw new NotFoundException();
    }

    return new GetManyClassDto(result);
  }
}
