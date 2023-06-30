import { Injectable } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private _apartments: Apartment[] = [
    new Apartment('test1', 'asd', 4),
    new Apartment('test2', 'asd', 4),
  ];
  constructor() {}
  public getApartment(name: string) {
    const foundApartment = this.apartments.find((x) => x.name === name);
    if (!!foundApartment) {
      return foundApartment;
    }
    return Apartment.None;
  }

  registerApartment(apartment: Apartment) {
    this._apartments.push(apartment);
  }

  unregisterApartment(apartment: Apartment) {
    let index: number = this._apartments.indexOf(apartment);
    if (index > -1) {
      this._apartments.splice(index, 1);
    }
  }
  public get apartments(): Apartment[] {
    return this._apartments;
  }
}
