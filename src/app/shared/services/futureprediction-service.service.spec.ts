import { TestBed } from '@angular/core/testing';

import { FuturepredictionServiceService } from './futureprediction-service.service';

describe('FuturepredictionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuturepredictionServiceService = TestBed.get(FuturepredictionServiceService);
    expect(service).toBeTruthy();
  });
});
