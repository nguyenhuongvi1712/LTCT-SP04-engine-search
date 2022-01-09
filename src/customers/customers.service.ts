import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customers.interface';
import { getAllUsers } from './service';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [];

  async findAll(): Promise<Customer[]> {
    const adverts = await getAllUsers();
    return adverts.users;
  }
}
