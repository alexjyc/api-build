import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService){}
    @Get()
    getAll(): Car[]{
        return this.carService.getAll();
    }

    @Get('search')
    search(@Query("price") targetPrice: string){
        return `We are looking for car maximum $${targetPrice}`;
    }

    @Get(`:id`)
    getOne(@Param(`id`) carId: string): Car {
        return this.carService.getOne(carId)
    }

    @Post()
    create(@Body() carData: CreateCarDTO){
        return this.carService.create(carData);
    }

    @Delete(`:id`)
    remove(@Param(`id`) carId: string){
        return this.carService.delete(carId);
    }

    @Patch(`:id`)
    patch(@Param(`id`) carId: string, @Body() updateData: UpdateCarDTO){
        return {
            updateDataCarId: carId,
            ...updateData,
        };
    }
}
