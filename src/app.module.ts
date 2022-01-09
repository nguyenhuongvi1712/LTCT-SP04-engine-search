import { Module } from '@nestjs/common';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    AdvertisementsModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
  ],
})
export class AppModule {}
