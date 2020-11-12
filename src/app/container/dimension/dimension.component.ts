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
  volume: Array<any>;
  rate: number;

  ngOnInit(): void {
    this.load();

    this.getRate();
  }

  load() {
    this._facade.loadDimensions().then((val) => {
      val.length.then((len) => {
        this.length = len;
      });

      val.volume.then((vol) => (this.volume = vol));
    });
  }

  getRate() {
    this._facade
      .dimRateCalculator(this.selectedOne, this.selectedTwo)
      .then((rate) => (this.rate = rate));
  }

  calculateBase() {
    this.convertAmount = this.baseAmount * this.rate;
  }

  calculateConvert() {
    this.baseAmount = this.convertAmount / this.rate;
  }
}
