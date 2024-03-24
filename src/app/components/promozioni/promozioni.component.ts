import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-promozioni',
  templateUrl: './promozioni.component.html',
  styleUrls: ['./promozioni.component.scss']
})
export class PromozioniComponent {
  carsDiscounted!: Car[];

  constructor() {
    this.getCars().then((cars) => {
      console.log(this.carsDiscounted);
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    this.carsDiscounted = data.filter((car : any) => car.price < 10000)
    return data;
  }
}

