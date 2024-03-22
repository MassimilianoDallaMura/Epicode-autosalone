import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss'],
})


export class EvidenceComponent {
  cars!: Car[];
  displayedCar: Car | undefined;


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


  displayRandomCar() {
    const randomIndex = Math.floor(Math.random() * this.cars.length);
    this.displayedCar = this.cars[randomIndex];
  }
  
}



