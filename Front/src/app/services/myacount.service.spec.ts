import { TestBed } from '@angular/core/testing';

import { MyacountService } from './myacount.service';

describe('MyacountService', () => {
  let service: MyacountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyacountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
