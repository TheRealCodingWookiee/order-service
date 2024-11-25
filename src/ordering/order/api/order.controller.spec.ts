import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderRequest } from './order-request.dto';
import { Beverage } from '../business/beverage.dto';
import { OrderService } from '../business/order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            processOrder: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should call service.processOrder with the correct orderRequest', () => {
    const beverage: Beverage = { name: 'vodka', price: 2, alcoholic: true };
    const orderRequest: OrderRequest = { order: new Map([[beverage, 2]]) };
    controller.order(orderRequest);
    expect(service.processOrder).toHaveBeenCalledWith(orderRequest);
  });


});