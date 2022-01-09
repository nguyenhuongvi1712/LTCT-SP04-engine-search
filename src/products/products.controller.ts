import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnprocessableEntityResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ProductVM } from './view-model/product.VM';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @ApiOperation({
    summary: 'Find all products or search',
  })
  @ApiQuery({
    name: 'keyword',
    type: String,
    description: 'find products by id or name',
    required: false,
  })
  @ApiOkResponse({
    description: 'Products founded.',
    type: [ProductVM],
  })
  @Get()
  async findAll(@Query('keyword') keyword): Promise<ProductVM[]> {
    try {
      let products = await this.productsService.findAll();
      if (keyword && keyword != '') {
        products = products.filter((ad) => {
          return (
            ad.name.toLowerCase().includes(keyword.toLowerCase()) ||
            (ad.id + '').toLowerCase().includes(keyword.toLowerCase())
          );
        });
      }
      return products.map((o) => ProductVM.toViewModel(o));
    } catch (error) {
      console.log(error);
    }
  }
}
