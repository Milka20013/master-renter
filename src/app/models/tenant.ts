import { BillStatus } from '../enums/bill-status';
import { BillType } from '../enums/bill-type';
import { Apartment } from './apartment';
import { Bill } from './bill';

export class Tenant {
  public id: number;
  public name: string;
  public entryDate: Date;
  public exitDate: Date;
  public apartment: Apartment;
  public bills: Bill[] = [];
  public static None = new Tenant(
    0,
    'None',
    new Date(),
    new Date(),
    Apartment.None
  );
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
    if (this.exitDate.getTime() < Date.now()) {
      return 0;
    }
    return (
      (this.exitDate.getTime() - this.entryDate.getTime()) / (1000 * 3600 * 24)
    );
  }

  public isRentDue() {
    if (Date.now() > this.exitDate.getTime()) {
      return false;
    }
    let lastRent = new Date('1/1/1');
    let dueTo = this.entryDate;
    for (let index = 0; index < this.bills.length; index++) {
      if (this.bills[index].type == BillType.Rent) {
        if (lastRent.getTime() < this.bills[index].dueTo.getTime()) {
          lastRent = this.bills[index].dueTo;
          dueTo = lastRent;
        }
      }
    }
    if ((Date.now() - lastRent.getTime()) / (1000 * 3600 * 24) >= 30) {
      return new Date(dueTo.getTime() + 1000 * 3600 * 24 * 30);
    }
    return false;
  }

  registerBill(bill: Bill) {
    this.bills.push(bill);
  }

  unregisterBill(bill: Bill) {
    const index = this.bills.indexOf(bill);
    this.bills.splice(index, 1);
  }

  public get unpaidBills(): Bill[] {
    return this.bills.filter(
      (x) => x.status != BillStatus.Acknowledged && x.status != BillStatus.Paid
    );
  }
}
