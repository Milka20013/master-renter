export class Apartment {
  public name: string;
  public address: string;
  public rent: number;
  public static None: Apartment = new Apartment('NONE', 'NONE', 0);
  constructor(name: string, address: string, rent: number) {
    this.name = name;
    this.address = address;
    this.rent = rent;
  }
}
