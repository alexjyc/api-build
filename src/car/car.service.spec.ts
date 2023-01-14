import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarService],
    }).compile();

    service = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a car', () => {
      service.create({
        brand: "Genesis",
        model: "G80",
        price: 80920,
        color: ["Black", "White", "Silver", "Red", "Blue", "Green"],
      });
      const result = service.getOne("1");
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getOne("2");
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Car with ID 2 is not found.');
      }
    })
  });

  describe('delete', () => {
    it('should delete a car', () => {
      service.create({
        brand: "Genesis",
        model: "G80",
        price: 80920,
        color: ["Black", "White", "Silver", "Red", "Blue", "Green"],
      });
      const result = service.delete("1");
      try {
        service.getOne("1");
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Car with ID 1 is not found.');
      }
    });
  });

  describe('create', () => {
    it('should create a car', () => {
      service.create({
        brand: "Genesis",
        model: "G80",
        price: 80920,
        color: ["Black", "White", "Silver", "Red", "Blue", "Green"],
      });
      const result = service.getOne("1");
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });
  });
});
