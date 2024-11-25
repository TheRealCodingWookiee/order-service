import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { ClientProxy } from '@nestjs/microservices';
import { OrderRequest } from '../api/order-request.dto';
import { Beverage } from './beverage.dto';

  describe('OrderService', () => {
    let service: OrderService;
    let clientProxy: ClientProxy;

    beforeEach(async () => {
      const clientProxyMock = {
        emit: jest.fn(),
      };

      const module: TestingModule = await Test.createTestingModule({
        providers: [
          OrderService,
          { provide: 'BEVERAGE-MARKET', useValue: clientProxyMock },
        ],
      }).compile();

      service = module.get<OrderService>(OrderService);
      clientProxy = module.get<ClientProxy>('BEVERAGE-MARKET');
    });

    it('should send order_submitted event', () => {
      const beverage: Beverage = { name: 'vodka', price: 2, alcoholic: true };
      const orderRequest: OrderRequest = { order: new Map([[beverage, 2]]) };     
      service.processOrder(orderRequest);
      expect(clientProxy.emit).toHaveBeenCalledWith('order_submitted', orderRequest);
    });
  });
