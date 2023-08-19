import { Class } from '@prisma/client';
import { GetClassDto } from './get-class.dto';

export class GetManyClassDto {
  constructor(data: Class[]) {
    this.classes = data.map((item) => new GetClassDto(item));
  }

  classes: GetClassDto[];
}
