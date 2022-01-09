import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Advertisement } from '../interfaces/advertisement.interface';

export class AdvertisementVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the advertisement',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The title of the advertisement',
    example: 'Domain Driven Design',
  })
  title: string;

  @Expose()
  @ApiProperty({
    description: 'The content of advertisement',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
  content: string;

  @Expose()
  @ApiProperty({
    description: 'The url of advertisement',
    example:
      'https://img.ltwebstatic.com/images3_pi/2021/10/21/16347942624bb0b4f4e3c3b4baa9ae8f05c6fc59bd_thumbnail_900x.webp',
  })
  advertismentUrl: string;

  @Expose()
  @ApiProperty({
    description: 'The image url of advertisement',
    example:
      'https://img.ltwebstatic.com/images3_pi/2021/10/21/16347942624bb0b4f4e3c3b4baa9ae8f05c6fc59bd_thumbnail_900x.webp',
  })
  imageUrl: string;

  @Expose()
  @ApiProperty({
    description: 'The type of the advertisement',
    example: 'Quang cao',
  })
  type: string;

  @Expose()
  @ApiProperty({ description: 'The crational date of the advertisement' })
  createdAt: Date;

  @Expose()
  @ApiProperty({ description: 'The date of the last advertisement update' })
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The advertising display type of the advertisement',
    example: 'mock_up',
  })
  advertisingDisplayType: string;

  @Expose()
  @ApiProperty({
    description: 'The advertising promotion of the advertisement',
    example: 'header',
  })
  advertisementPosition: string;

  @Expose()
  @ApiProperty({
    description: 'The status of the advertisement',
    example: 'activated',
  })
  status: string;

  @Expose()
  @ApiProperty({
    description: 'The numbers of access of the advertisement',
    example: 7,
  })
  accessNumber: number;

  static toViewModel(advertisement: Advertisement): AdvertisementVM {
    return plainToClass(AdvertisementVM, advertisement, {
      excludeExtraneousValues: true,
    });
  }
}
