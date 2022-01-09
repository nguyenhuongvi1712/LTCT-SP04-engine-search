import { Injectable } from '@nestjs/common';
import { Order } from './interface/orders.interface';
import { getAllOrders } from './service';

@Injectable()
export class OrdersService {
  private readonly orders: Order[] = [];

  async findAll(): Promise<Order[]> {
    const orders = await getAllOrders();
    return orders;
  }
}
