import { TestBed } from '@angular/core/testing';

import { CpuServicesService } from './cpu-services.service';

describe('CpuServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpuServicesService = TestBed.get(CpuServicesService);
    expect(service).toBeTruthy();
  });
});
