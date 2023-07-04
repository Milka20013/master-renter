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

  name: string = '';
  address: string = '';
  rent: number = 0;
  constructor(private apartmentSercive: ApartmentService) {}
  ngOnInit(): void {
    this.apartments = this.apartmentSercive.apartments;
  }

  updateName(name: string) {
    this.name = name;
  }
  updateAddress(address: string) {
    this.address = address;
  }
  updateRent(rent: number) {
    this.rent = rent;
  }

  registerApartment() {
    if (!!!this.name) {
      console.error('Name cannot be empty');
      return;
    }
    this.apartmentSercive.registerApartment(
      new Apartment(this.name, this.address, this.rent)
    );
  }
}
