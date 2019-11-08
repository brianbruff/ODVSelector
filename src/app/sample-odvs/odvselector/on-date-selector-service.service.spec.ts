import { TestBed } from '@angular/core/testing';

import { OnDateSelectorServiceService } from './on-date-selector-service.service';

describe('OnDateSelectorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnDateSelectorServiceService = TestBed.get(OnDateSelectorServiceService);
    expect(service).toBeTruthy();
  });
});
