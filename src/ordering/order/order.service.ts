import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
    constructor(
        @Inject('BEVERAGE-MARKET') private readonly marketClient: ClientProxy
    ) {}

    processOrder(data: any) {
        this.marketClient.emit(
            'order_submitted', 
            "hi"
        )
    }
}
