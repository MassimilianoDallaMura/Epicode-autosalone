import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  car!: Car;
  car2!: Car
  cars!: Car[];



  constructor() {
    this.getCars().then((cars) => {
      console.log(this.cars);
    });
  }

  async getCars() {
    const response = await fetch('assets/db.json');
    const data = await response.json();
    this.cars = data
    let index = Math.floor(Math.random() * this.cars.length);
    this.car = this.cars[index];
  }
}