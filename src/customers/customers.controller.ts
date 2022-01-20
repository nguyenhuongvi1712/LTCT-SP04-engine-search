import { Controller, Get, Query, Body, Post, Headers } from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CustomerVM } from './view-model/customers.VM';
import { LoginDto } from './view-model/login-dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @ApiOperation({
    summary: 'Find all customers',
  })
  @ApiQuery({
    name: 'id',
    type: Number,
    description: 'find customers by id',
    required: false,
  })
  @ApiQuery({
    name: 'username',
    type: String,
    description: 'find customers by username',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    type: String,
    description: 'find customers by email',
    required: false,
  })
  @ApiHeader({
    name: 'token',
    required: true,
    description: 'login',
  })
  @ApiOkResponse({
    description: 'Customers founded.',
    type: [CustomerVM],
  })
  @Get()
  async findAll(
    @Query('id') id,
    @Query('username') username,
    @Query('email') email,
    @Headers('token') token,
  ): Promise<CustomerVM[]> {
    try {
      let customers = await this.customersService.findAll(token);
      if (!customers) return [];
      customers = customers.filter((ad) => {
        return ad.role == 'customer';
      });
      if (id && id != '') {
        customers = customers.filter((ad) => {
          return ad.id == id;
        });
      } else if (email && email != '') {
        customers = customers.filter((ad) => {
          return ad.email.toLowerCase().includes(email.toLowerCase());
        });
      } else if (username && username != '') {
        customers = customers.filter((ad) => {
          return ad.username.toLowerCase().includes(username.toLowerCase());
        });
      }
      return customers.map((customer) => CustomerVM.toViewModel(customer));
    } catch (error) {
      console.log(error);
    }
  }

  @ApiOperation({
    summary: 'Login',
  })
  @ApiBody({
    type: LoginDto,
  })
  @Post('/login')
  async login(@Body() data: LoginDto) {
    try {
      const { username, password } = data;
      console.log(data);
      return await this.customersService.login(username, password);
    } catch (error) {
      return error;
    }
  }
}
