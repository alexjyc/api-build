import { Car } from './entities/car.entity';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarService {
    private car: Car[] = [];

    getAll(): Car[] {
        return this.car;
    }

    getOne(id: string): Car {
        const car = this.car.find(car => car.id === parseInt(id));
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} is not found.`)
        }
        return car
    }

    delete(id: string){
        this.getOne(id)
        this.car = this.car.filter(car => car.id !== parseInt(id));
    }

    create(carData: CreateCarDTO) {
        this.car.push({
            id: this.car.length + 1,
            ...carData
        })
    }

    update(id: string, updateData: UpdateCarDTO) {
        const prevCar = this.getOne(id);
        this.delete(id);
        this.car.push({ ...prevCar, ...updateData });
    }
}
