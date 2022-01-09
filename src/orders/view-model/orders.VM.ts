import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../interface/orders.interface';
export class OrderVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the order',
    example: 1,
  })
  order_id: number;

  @Expose()
  @ApiProperty({
    description: 'The user_id of the order',
    example: 1,
  })
  user_id: number;

  @Expose()
  @ApiProperty({
    description: 'Total price of the order',
    example: 123000,
  })
  price: number;

  @Expose()
  @ApiProperty({
    description: 'The delivery_note of the order',
    example: 'tra hang o day',
  })
  delivery_note: string;

  @Expose()
  @ApiProperty({
    description: 'The status of the order',
    example: 'active || cancelled',
  })
  status: string;

  @Expose()
  @ApiProperty({
    description: 'The order_timestamp of the order',
    example: '2021-12-27 08:30:43',
  })
  order_timestamp: Date;

  @Expose()
  @ApiProperty({
    description: 'The deliver_timestamp of the order',
    example: '2021-12-27 08:30:43',
  })
  deliver_timestamp: Date;

  @Expose()
  @ApiProperty({
    description: 'The cancel_timestamp of the order',
    example: '2021-12-27 08:30:43',
  })
  cancel_timestamp: Date;

  static toViewModel(order: Order): OrderVM {
    return plainToClass(OrderVM, order, {
      excludeExtraneousValues: true,
    });
  }
}
