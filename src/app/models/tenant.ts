export class Tenant {
  public name: string;
  public entryDate: Date;
  public exitDate: Date;
  public rent: number;
  constructor(name: string, entryDate: Date, exitDate: Date, rent: number) {
    this.name = name;
    this.entryDate = entryDate;
    this.exitDate = exitDate;
    this.rent = rent;
  }
}
