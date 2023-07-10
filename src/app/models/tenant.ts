import { Apartment } from './apartment';

export class Tenant {
  public id: number;
  public name: string;
  public entryDate: Date;
  public exitDate: Date;
  public apartment: Apartment;
  constructor(
    id: number,
    name: string,
    entryDate: Date,
    exitDate: Date,
    apartment: Apartment
  ) {
    this.id = id;
    this.name = name;
    this.entryDate = entryDate;
    this.exitDate = exitDate;
    this.apartment = apartment;
  }

  public get remainingTime(): number {
    return (
      (this.exitDate.getTime() - this.entryDate.getTime()) / (1000 * 3600 * 24)
    );
  }
}
