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

  ngOnInit(): void {
    this._facade.loadDimensions().then((val) => {
      val.length.then((len) => {
        this.length = len;
      });

      val.volume.then((vol) => (this.volume = vol));
    });
  }

  calculate() {}
}
