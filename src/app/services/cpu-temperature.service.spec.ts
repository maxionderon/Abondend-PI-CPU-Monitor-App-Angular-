import { TestBed } from '@angular/core/testing';

import { CpuTemperatureService } from './cpu-temperature.service';

describe('CpuTemperatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpuTemperatureService = TestBed.get(CpuTemperatureService);
    expect(service).toBeTruthy();
  });
});
