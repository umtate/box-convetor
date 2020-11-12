import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RatesService } from './rates.service';

describe('RatesService', () => {
  let service: RatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(RatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a valid rate response', () => {
    const result$ = service.getRates('USD');
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });
});
