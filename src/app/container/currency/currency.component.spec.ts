import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import { StoreModule } from '@ngrx/store';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyComponent],
      imports: [StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load currency list', () => {});

  it('should clear inputs', () => {
    component.selectBase('USD');

    expect(component.baseAmount).toEqual(0);
  });

  it('should set base to event', () => {
    component.selectBase('USD');
    expect(component.base).toEqual('USD');
  });

  it('should set convertAmount value', () => {
    component.baseAmount = 1;
    component.rate = 0.5;
    component.calculate();

    expect(component.convertAmount).toEqual(0.5);
  });

  it('should set baseAmount value', () => {
    component.convertAmount = 2;
    component.rate = 5;
    component.convert();

    expect(component.baseAmount).toEqual(0.4);
  });
});
