import { Injectable } from '@nestjs/common';
import { Advertisement } from './interfaces/advertisement.interface';
import { getAdvertisment } from './services';

@Injectable()
export class AdvertisementsService {
  private readonly advertisements: Advertisement[] = [];

  async findAll(): Promise<Advertisement[]> {
    const adverts = await getAdvertisment();
    return adverts.data;
  }
}
