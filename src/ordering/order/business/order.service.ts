import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderRequest } from '../api/order-request.dto';

@Injectable()
export class OrderService {
    constructor(
        @Inject('BEVERAGE-MARKET') private readonly marketClient: ClientProxy
    ) {}

    processOrder(data: OrderRequest) {
        this.marketClient.emit(
            'order_submitted', 
            data
        )
    }
}
