import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Property "model" must be a string.' })
  readonly model: string;

  @IsString({ message: 'Property "brand" must be a string.' })
  readonly brand: string;
}
