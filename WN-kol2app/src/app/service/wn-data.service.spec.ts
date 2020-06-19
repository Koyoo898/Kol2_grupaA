import { TestBed } from '@angular/core/testing';

import { WNDataService } from './wn-data.service';

describe('WNDataService', () => {
  let service: WNDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WNDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
