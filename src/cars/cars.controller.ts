import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() payload: CreateCarDto) {
    return this.carsService.create(payload);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: CreateCarDto,
  ) {
    return this.carsService.update(id, payload);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    this.carsService.delete(id);
    return { msg: 'Car deleted successfully.' };
  }
}
