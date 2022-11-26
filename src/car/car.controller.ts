import { Controller, Get, Param } from '@nestjs/common';

@Controller('car')
export class CarController {
    @Get()
    getAll(){
        return "This will return all cars";
    }

    @Get("/:id")
    getOne(@Param('id') id: string){
        return "This will return one car";
    }


}
