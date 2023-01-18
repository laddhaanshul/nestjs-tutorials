import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }

  compute(a: number, b: number) {
    this.powerService.supplyPower(a);
    return a + b;
  }
}
