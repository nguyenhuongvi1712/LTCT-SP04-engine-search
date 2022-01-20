import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customers.interface';
import { getAllUsers, login } from './service';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [];

  async findAll(token: string): Promise<Customer[]> {
    const adverts = await getAllUsers(token);
    return adverts;
  }

  async login(username: string, password: string) {
    return await login(username, password);
  }
}
