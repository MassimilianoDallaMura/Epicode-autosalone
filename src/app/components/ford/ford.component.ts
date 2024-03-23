import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent {
    cars!: Car[];

  constructor() {
    this.getCars().then((cars) => {
      console.log(this.cars);
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    this.cars = data.filter((car: any) => car.brand === 'Ford');
    return data;
  }
}
