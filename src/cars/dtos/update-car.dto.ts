import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString({ message: 'Property "model" must be a string.' })
  readonly model?: string;

  @IsOptional()
  @IsString({ message: 'Property "brand" must be a string.' })
  readonly brand?: string;
}
