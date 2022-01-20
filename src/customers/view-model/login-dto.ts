import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @Expose()
  @ApiProperty({
    description: 'The name of the customer',
    example: 'admin',
  })
  username: string;

  @Expose()
  @ApiProperty({
    description: 'password',
    example: '123456',
  })
  password: string;
}
