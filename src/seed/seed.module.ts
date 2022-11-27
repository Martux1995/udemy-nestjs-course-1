import { Module } from '@nestjs/common';

import { SeedController } from './seed.controller';

import { SeedService } from './seed.service';
import { CarsModule } from '../cars/cars.module';
import { BrandsModule } from '../brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
