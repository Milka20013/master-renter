import { Apartment } from './apartment';

export class Tenant {
  public name: string;
  public entryDate: Date;
  public exitDate: Date;
  public rent: number;
  public apartment: Apartment;
  constructor(
    name: string,
    entryDate: Date,
    exitDate: Date,
    rent: number,
    apartment: Apartment
  ) {
    this.name = name;
    this.entryDate = entryDate;
    this.exitDate = exitDate;
    this.rent = rent;
    this.apartment = apartment;
  }

  public get remainingTime(): number {
    return (
      (this.exitDate.getTime() - this.entryDate.getTime()) / (1000 * 3600 * 24)
    );
  }
}
