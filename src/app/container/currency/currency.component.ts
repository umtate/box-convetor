import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from '../../shared/facade/facade.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  constructor(private facade: FacadeService) {}
  currency$: Observable<any>;

  ngOnInit(): void {
    this.facade.currency().then((obs) => {
      this.currency$ = obs;
    });
  }

  selectBase(event) {
    this.facade.rates(event);
  }

  selectPair(event) {
    console.log(event);
  }
}
