import { Apartment } from 'src/app/models/apartment';

export class ApartmentUpdater {
  apartment: Apartment;

  constructor(apartment: Apartment) {
    this.apartment = apartment;
  }

  updateName(name: string) {
    this.apartment.name = name;
  }
  updateAddress(address: string) {
    this.apartment.address = address;
  }
  updateRent(rent: number | string) {
    this.apartment.rent = +rent;
  }
}
