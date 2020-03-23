import { TestBed } from '@angular/core/testing';

import { AnomalyServicesService } from './anomaly-services.service';

describe('AnomalyServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnomalyServicesService = TestBed.get(AnomalyServicesService);
    expect(service).toBeTruthy();
  });
});
