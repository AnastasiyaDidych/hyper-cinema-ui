import { TestBed, inject } from '@angular/core/testing';

import { CoefficientService } from './coefficient.service';

describe('CoefficientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoefficientService]
    });
  });

  it('should be created', inject([CoefficientService], (service: CoefficientService) => {
    expect(service).toBeTruthy();
  }));
});
