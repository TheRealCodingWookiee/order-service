import { Module } from '@nestjs/common';
import { OrderController } from './order/api/order.controller';
import { OrderService } from './order/business/order.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BEVERAGE-MARKET',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderingModule {}
