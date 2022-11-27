import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'Parameter "name" is not a valid String.' })
  @MinLength(1, { message: 'Parameter "name" must have at least 1 character.' })
  name: string;
}
