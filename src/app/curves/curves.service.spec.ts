import { TestBed } from '@angular/core/testing';

import { CurvesService } from './curves.service';

describe('CurvesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurvesService = TestBed.get(CurvesService);
    expect(service).toBeTruthy();
  });
});
