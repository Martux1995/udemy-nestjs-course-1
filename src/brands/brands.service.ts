import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' not found.`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    brand.name = updateBrandDto.name;
    brand.updatedAt = new Date().getDate();

    return brand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands.filter((b) => b.id === id);
  }

  fillBrandsWithSeedData(seedData: Brand[]) {
    this.brands.push(...seedData);
  }
}
