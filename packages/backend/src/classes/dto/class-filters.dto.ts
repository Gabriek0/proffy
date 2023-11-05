import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ClassFilters {
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
