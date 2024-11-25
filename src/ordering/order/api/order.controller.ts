import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from '../business/order.service';
import { OrderRequest } from './order-request.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly service: OrderService) {}

    @Post()
    order(@Body() orderRequest: OrderRequest) {
        this.service.processOrder(orderRequest)
    }
}
