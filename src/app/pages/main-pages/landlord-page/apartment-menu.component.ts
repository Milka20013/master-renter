import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'npm-apartment-menu',
  templateUrl: './apartment-menu.component.html',
  styleUrls: ['./apartment-menu.component.less'],
})
export class ApartmentMenuComponent implements OnInit {
  apartments: Apartment[] = [];
  constructor(private apartmentSercive: ApartmentService) {}
  ngOnInit(): void {
    this.apartments = this.apartmentSercive.apartments;
  }

  registerApartment() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const address = (<HTMLInputElement>document.getElementById('address'))
      .value;
    const rent: number = +(<HTMLInputElement>document.getElementById('rent'))
      .value;
    this.apartmentSercive.registerApartment(new Apartment(name, address, rent));
    this.apartments = this.apartmentSercive.apartments;
    console.log(this.apartments);
  }
}
