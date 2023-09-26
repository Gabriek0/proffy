import { Class } from '@prisma/client';
import { GetClassDto } from './get-class.dto';
import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';

@ApiExtraModels(GetClassDto)
export class GetManyClassDto {
  constructor(data: Class[]) {
    this.classes = data.map((item) => new GetClassDto(item));
  }

  @ApiProperty({
    type: 'array',
    items: { $ref: getSchemaPath(GetClassDto) },
  })
  classes: GetClassDto[];
}
