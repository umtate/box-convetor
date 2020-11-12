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

  base: string;
  target: string;

  date = new FormControl(new Date());

  @Input() convertAmount: number = 0;

  @Input() baseAmount: number = 0;

  loading: Observable<boolean>;

  ngOnInit(): void {
    this.loading = this.facade.currencyLoading();
    this.loadCurrencyList();
  }

  // get list of currencies, get as an observable
  loadCurrencyList() {
    this.facade.currency().then((obs) => {
      this.currency$ = obs;
    });
  }

  // on selecting base currency clear inputs and get rates for selected currency
  selectBase(event: string) {
    this.clearInputs();
    this.facade.rates(event);
    this.base = event;
  }

  // clear values in input fields
  clearInputs() {
    this.convertAmount = 0;
    this.baseAmount = 0;
  }

  // on select target get rate for exchange
  selectPair(event) {
    this.target = event;
    this.facade.calculate(event).then((val: number) => {
      this.rate = val;
      this.calculate();
    });
  }

  // calculate target value give base amount
  calculate() {
    this.convertAmount = this.baseAmount * this.rate;
  }

  // calculate base value give targert amount

  convert() {
    this.baseAmount = this.convertAmount / this.rate;
  }
}
