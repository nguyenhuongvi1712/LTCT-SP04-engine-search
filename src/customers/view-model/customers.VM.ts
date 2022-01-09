import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../interface/customers.interface';
export class CustomerVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the customer',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The name of the customer',
    example: 'Vi',
  })
  name: string;

  @Expose()
  @ApiProperty({
    description: 'Gender',
    example: 'male',
  })
  gender: string;

  @Expose()
  @ApiProperty({
    description: 'The address of the customer',
    example: '1st Lang Ha',
  })
  address: string;

  @Expose()
  @ApiProperty({
    description: 'The birthday of the customer',
    example: '17-12-2000',
  })
  birthday: string;

  @Expose()
  @ApiProperty({
    description: 'The telephone number of the customer',
    example: '0123456789',
  })
  phone: string;

  @Expose()
  @ApiProperty({
    description: 'The username of the customer',
    example: 'viii1712',
  })
  username: string;

  @Expose()
  @ApiProperty({
    description: 'The emai; of the customer',
    example: 'vi@gmail.com',
  })
  email: string;

  static toViewModel(customer: Customer): CustomerVM {
    return plainToClass(CustomerVM, customer, {
      excludeExtraneousValues: true,
    });
  }
}
