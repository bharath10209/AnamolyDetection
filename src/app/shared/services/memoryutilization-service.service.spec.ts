import { TestBed } from '@angular/core/testing';

import { MemoryutilizationServiceService } from './memoryutilization-service.service';

describe('MemoryutilizationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryutilizationServiceService = TestBed.get(MemoryutilizationServiceService);
    expect(service).toBeTruthy();
  });
});
