import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiPropertyOptional,
  ApiTags,
} from '@nestjs/swagger';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { GetClassDto } from './dto/get-class.dto';
import { GetManyClassDto } from './dto/get-many-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { IsOptional } from 'class-validator';

class ClassFilters {
  @ApiPropertyOptional()
  @IsOptional()
  subject?: string;

  @ApiPropertyOptional()
  @IsOptional()
  cost?: number;

  @ApiPropertyOptional()
  @IsOptional()
  weekDay?: number;
}

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
  @ApiOkResponse({ type: GetManyClassDto })
  async find(@Query() params: ClassFilters) {
    const result = await this.classService.findAll(params);

    if (!result) {
      throw new NotFoundException();
    }

    return new GetManyClassDto(result);
  }
}
