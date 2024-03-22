import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-marchi',
  templateUrl: './marchi.component.html',
  styleUrls: ['./marchi.component.scss'],
})
export class MarchiComponent {
  cars!: Car[];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
      console.log(this.cars);
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }



}
