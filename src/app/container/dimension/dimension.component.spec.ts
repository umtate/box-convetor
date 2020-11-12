import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionComponent } from './dimension.component';
import { FacadeService } from '../../shared/facade/facade.service';
import { StoreModule } from '@ngrx/store';

describe('DimensionComponent', () => {
  let component: DimensionComponent;
  let fixture: ComponentFixture<DimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DimensionComponent],
      providers: [],
      imports: [StoreModule.forRoot({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set rate', () => {});

  it('should set convert amount', () => {
    component.baseAmount = 1;
    component.rate = 100;
    component.calculateBase();

    expect(component.convertAmount).toEqual(100);
  });

  it('should set base amount', () => {
    component.convertAmount = 100;
    component.rate = 2;
    component.calculateConvert();

    expect(component.baseAmount).toEqual(50);
  });
});
