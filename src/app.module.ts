import { Module } from '@nestjs/common';
import { CarController } from './car/car.controller';

@Module({
  imports: [],
  controllers: [CarController],
  providers: [],
})
export class AppModule {}
