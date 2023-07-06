export class Apartment {
  public id: number;
  public name: string;
  public address: string;
  public rent: number;
  public static None: Apartment = new Apartment(0, 'NONE', 'NONE', 0);
  constructor(id: number, name: string, address: string, rent: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.rent = rent;
  }
}
