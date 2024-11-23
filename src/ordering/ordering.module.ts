import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
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
