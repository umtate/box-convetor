import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from '../../shared/facade/facade.service';
import { FormControl } from '@angular/forms';
import { NocommaPipe } from '../../shared/pipes/nocomma.pipe';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [NocommaPipe],
})
export class CurrencyComponent implements OnInit {
  constructor(private facade: FacadeService) {}
  currency$: Observable<any>;
  rate: number = 0;

  date = new FormControl(new Date());

  @Input() convertAmount: number = 0;

  @Input() baseAmount: number = 0;

  ngOnInit(): void {
    this.facade.currency().then((obs) => {
      this.currency$ = obs;
    });
  }

  selectBase(event) {
    this.clearInputs();
    this.facade.rates(event);
  }

  clearInputs() {
    this.convertAmount = 0;
    this.baseAmount = 0;
  }

  selectPair(event) {
    this.facade.calculate(event).then((val: number) => {
      this.rate = val;
      this.calculate();
    });
  }

  calculate() {
    this.convertAmount = this.baseAmount * this.rate;
  }

  convert() {
    this.baseAmount = this.convertAmount / this.rate;
  }
}
