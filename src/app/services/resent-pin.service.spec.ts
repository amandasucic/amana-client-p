import { TestBed } from '@angular/core/testing';

import { ResentPinService } from './resent-pin.service';

describe('ResentPinService', () => {
  let service: ResentPinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResentPinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
