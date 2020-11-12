import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DimensionsService } from './dimensions.service';

describe('DimensionService', () => {
  let service: DimensionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(DimensionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a valid length response', () => {
    const result$ = service.getLength();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });

  it('should have a valid volume response', () => {
    const result$ = service.getVolume();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });

  it('should have a valid lenght units response', () => {
    const result$ = service.getLengthUnits();
    result$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });
});
