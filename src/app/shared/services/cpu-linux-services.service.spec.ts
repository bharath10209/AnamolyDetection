import { TestBed } from '@angular/core/testing';

import { CpuLinuxServicesService } from './cpu-linux-services.service';

describe('CpuLinuxServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpuLinuxServicesService = TestBed.get(CpuLinuxServicesService);
    expect(service).toBeTruthy();
  });
});
