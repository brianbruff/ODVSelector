import { TestBed } from '@angular/core/testing';

import { OnDateSelectorService } from './on-date-selector.service';

describe('OnDateSelectorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnDateSelectorService = TestBed.get(OnDateSelectorService);
    expect(service).toBeTruthy();
  });
});
