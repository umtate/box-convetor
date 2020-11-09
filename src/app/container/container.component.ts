import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>Heloo</p>
    <router-outlet></router-outlet>`,
  styles: [],
})
export class ContainerComponent {
  title = 'convertor';
}
