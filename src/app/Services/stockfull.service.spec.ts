import { TestBed } from '@angular/core/testing';

import { StockfullService } from './stockfull.service';

describe('StockfullService', () => {
  let service: StockfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
