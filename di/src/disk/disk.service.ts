import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }

  getData() {
    console.log('Drawing 20 watts of power');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
