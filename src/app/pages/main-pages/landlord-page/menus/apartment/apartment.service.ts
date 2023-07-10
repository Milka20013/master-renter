import { Injectable } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private _apartments: Apartment[] = [
    new Apartment(1, 'Apartment 1', 'address 1', 4),
    new Apartment(2, 'Apartment 2', 'address 2', 6),
  ];
  constructor() {}

  public newId(): number {
    let maxId = -1;
    for (let index = 0; index < this.apartments.length; index++) {
      if (maxId < this.apartments[index].id) {
        maxId = this.apartments[index].id;
      }
    }
    return maxId + 1;
  }
  public getApartment(name: string) {
    const foundApartment = this.apartments.find((x) => x.name === name);
    if (!!foundApartment) {
      return foundApartment;
    }
    return Apartment.None;
  }

  public getApartmentById(id: number) {
    const foundApartment = this.apartments.find((x) => x.id === id);
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
