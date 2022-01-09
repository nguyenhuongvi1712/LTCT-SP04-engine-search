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
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementVM } from './view-model/advertisement.VM';

@ApiTags('Advertisements')
@Controller('advertisements')
export class AdvertisementsController {
  constructor(private advertisementService: AdvertisementsService) {}
  @ApiOperation({
    summary: 'Find all advertisement',
  })
  @ApiQuery({
    name: 'keyword',
    type: String,
    description: 'find advertisements by id or title',
    required: false,
  })
  @ApiOkResponse({
    description: 'Advertisements founded.',
    type: [AdvertisementVM],
  })
  @Get()
  async findAll(@Query('keyword') keyword): Promise<AdvertisementVM[]> {
    try {
      let advertisements = await this.advertisementService.findAll();
      if (keyword && keyword != '') {
        advertisements = advertisements.filter((ad) => {
          return (
            ad.title.toLowerCase().includes(keyword.toLowerCase()) ||
            (ad.id + '').toLowerCase().includes(keyword.toLowerCase())
          );
        });
      }
      return advertisements.map((adverts) =>
        AdvertisementVM.toViewModel(adverts),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
