import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'Cherokee',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);

    if (!car) {
      throw new NotFoundException(`Car ID '${id}' is not found on the system.`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: ICar = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id);

    car.brand = updateCarDto.brand || car.brand;
    car.model = updateCarDto.model || car.model;

    return car;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars.filter((c) => c.id !== id);
  }

  fillCarsWithSeedData(seedData: ICar[]) {
    this.cars.push(...seedData);
  }
}
