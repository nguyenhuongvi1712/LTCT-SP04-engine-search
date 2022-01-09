import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { OrderVM } from './view-model/orders.VM';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
  @ApiOperation({
    summary: 'Find all orders or search',
  })
  @ApiQuery({
    name: 'id',
    type: Number,
    description: 'find orders by id',
    required: false,
  })
  @ApiQuery({
    name: 'user_id',
    type: Number,
    description: 'find orders by user_id',
    required: false,
  })
  @ApiQuery({
    name: 'status',
    type: String,
    description: 'find orders by status',
    required: false,
  })
  @ApiOkResponse({
    description: 'Orders founded.',
    type: [OrderVM],
  })
  @Get()
  async findAll(
    @Query('id') id,
    @Query('user_id') user_id,
    @Query('status') status,
  ): Promise<OrderVM[]> {
    try {
      let orders = await this.ordersService.findAll();
      if (id && id != '') {
        orders = orders.filter((ad) => {
          return ad.order_id == id;
        });
      } else if (user_id && user_id != '') {
        orders = orders.filter((ad) => {
          return ad.user_id == user_id;
        });
      } else if (status && status != '') {
        orders = orders.filter((ad) => {
          return ad.status.toLowerCase().includes(status.toLowerCase());
        });
      }
      return orders.map((order) => OrderVM.toViewModel(order));
    } catch (error) {
      console.log(error);
    }
  }
}
