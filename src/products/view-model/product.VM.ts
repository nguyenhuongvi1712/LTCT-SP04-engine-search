import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../interfaces/product.interface';
export class ProductVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the productt',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The name of the product',
    example: 'quan dai',
  })
  name: string;

  @Expose()
  @ApiProperty({
    description: 'The type of product',
    example: 'ao',
  })
  type: string;

  @Expose()
  @ApiProperty({
    description: 'The price of product',
    example: 450000,
  })
  price: number;

  @Expose()
  @ApiProperty({
    description: 'The description of product',
    example: 'soi vai khong cang',
  })
  description: string;

  @Expose()
  @ApiProperty({
    description: 'The size of product',
    example: 'M',
  })
  size: string;

  @Expose()
  @ApiProperty({
    description: 'The  image url of product',
    example:
      'https://img.ltwebstatic.com/images3_pi/2021/10/21/16347942624bb0b4f4e3c3b4baa9ae8f05c6fc59bd_thumbnail_900x.webp',
  })
  image: string;

  @Expose()
  @ApiProperty({
    description: 'The video url of product',
    example:
      'https://img.ltwebstatic.com/images3_pi/2021/10/21/16347942624bb0b4f4e3c3b4baa9ae8f05c6fc59bd_thumbnail_900x.webp',
  })
  video: string;

  @Expose()
  @ApiProperty({
    description: 'The color of the product',
    example: 'red',
  })
  color: string;

  @Expose()
  @ApiProperty({
    description: 'The quantity of the product',
    example: 3,
  })
  quantity: number;

  static toViewModel(product: Product): ProductVM {
    return plainToClass(ProductVM, product, {
      excludeExtraneousValues: true,
    });
  }
}
