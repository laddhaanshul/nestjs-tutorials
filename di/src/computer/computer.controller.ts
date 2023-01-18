import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  cpuService: CpuService;
  diksService: DiskService;

  constructor(cpuService: CpuService, diskService: DiskService) {
    this.cpuService = cpuService;
    this.diksService = diskService;
  }

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diksService.getData()];
  }
}
