import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [CarModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
