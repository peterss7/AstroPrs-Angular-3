import { TestBed } from '@angular/core/testing';

import { RequestLineService } from './request-line.service';

describe('RequestLineService', () => {
  let service: RequestLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
