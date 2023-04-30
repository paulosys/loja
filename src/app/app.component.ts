import { Component } from '@angular/core';
import { Smartphone } from './shared/models/smartphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';

  smartphoneInput: Smartphone;
  storage: Array<Smartphone>;

  constructor() {
    this.smartphoneInput = new Smartphone('', '', '');
    this.storage = [
      new Smartphone('Samsung', 'S20FE', 'R$1500'),
      new Smartphone('Apple', 'Iphone XR', 'R$3500'),
      new Smartphone('Motorola', 'G21', 'R$1000'),
    ];
  }

  add(): void {
    const canAdd =
      this.smartphoneInput.brand != '' &&
      this.smartphoneInput.model != '' &&
      this.smartphoneInput.price != '';

    if (canAdd) {
      this.storage.push(this.smartphoneInput);
      this.smartphoneInput = new Smartphone('', '', '');
    } else {
      alert('Preencha os campos!');
    }
  }

  delete(model: String): void {
    const index = this.storage.findIndex(e => e.model === model);
    this.storage.splice(index, 1);
  }

  edit(smartphone: Smartphone) {
    this.smartphoneInput = smartphone;
  }
  
}
