import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss'],
})
export class FiatComponent {
  cars!: Car[];

  constructor() {
    this.getCars().then((cars) => {
      console.log(this.cars);
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    this.cars = data.filter((car: any) => car.brand === 'Fiat');
    return data;
  }
}
