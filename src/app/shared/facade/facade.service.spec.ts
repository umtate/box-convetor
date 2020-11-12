import { TestBed } from '@angular/core/testing';

import { FacadeService } from './facade.service';
import { StoreModule } from '@ngrx/store';
import { filter } from 'rxjs/operators';

describe('FacadeService', () => {
  let service: FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StoreModule.forRoot({})] });
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a valid rate response', async () => {
  //   await service.rates('ZAR');
  //   const result$ = service.calculate('USD');
  //   result$.then((res) => {
  //     expect(res).toBeDefined();
  //   });
  // });

  it('should have a valid rate response', async () => {
    const result$ = service.rates('ZAR');
    result$.then((res) => {
      res.subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

  it('should have a valid currency response', async () => {
    const result$ = service.currency();
    result$.then((res) => {
      res.subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

  it('should be of type boolen', async () => {
    const result$ = service.currencyLoading();
    result$.pipe(filter((x) => !!x)).subscribe((val) => {
      expect(val).toBeInstanceOf(Boolean);
    });
  });

  it('should be of type object', async () => {
    const result$ = service.loadDimensions();
    result$.then((res) => {
      expect(res).toBeInstanceOf(Object);
    });
  });
});
