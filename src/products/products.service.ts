import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { getProducts } from './service';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  async findAll(): Promise<Product[]> {
    const products = await getProducts();
    return products;
  }
}
