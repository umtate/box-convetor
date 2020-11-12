import { TestBed } from '@angular/core/testing';

import { FacadeService } from './facade.service';
import { StoreModule } from '@ngrx/store';

describe('FacadeService', () => {
  let service: FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StoreModule.forRoot({})] });
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
