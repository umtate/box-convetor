import { Component, Input, OnInit } from '@angular/core';
import { FacadeService } from '../../shared/facade/facade.service';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.scss'],
})
export class DimensionComponent implements OnInit {
  constructor(private _facade: FacadeService) {}
  selectedOne: string = 'cm';
  selectedTwo: string = 'meter';

  @Input() convertAmount: number = 0;

  @Input() baseAmount: number = 0;

  length: Array<any>;
  rate: number;

  ngOnInit(): void {
    this.load();

    this.getRate();
  }

  // load list of dimensions from data store
  load() {
    this._facade.loadDimensions().then((val) => {
      val.length.then((len) => {
        this.length = len;
      });
    });
  }

  // pass varibles as strings to be converted and get rate in return
  getRate() {
    this._facade
      .dimRateCalculator(this.selectedOne, this.selectedTwo)
      .then((rate) => {
        this.rate = rate;
        this.calculateBase();
      });
  }

  calculateBase() {
    this.convertAmount = this.baseAmount * this.rate;
  }

  calculateConvert() {
    this.baseAmount = this.convertAmount / this.rate;
  }
}
