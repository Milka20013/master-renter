import { Injectable } from '@angular/core';
import { BillType } from 'src/app/enums/bill-type';
import { Apartment } from 'src/app/models/apartment';
import { Bill } from 'src/app/models/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private _bills: Bill[] = [
    new Bill(
      BillType.Electric,
      400,
      new Date('2023/07/30'),
      'You have to pay lmao',
      Apartment.None
    ),
  ];
  constructor() {}

  registerBill(bill: Bill) {
    this._bills.push(bill);
  }

  unRegisterBill(bill: Bill) {
    const index = this._bills.indexOf(bill);
    this._bills.splice(index, 1);
  }

  public get bills() {
    for (let index = 0; index < this._bills.length; index++) {
      this._bills[index].checkStatus();
    }
    return this._bills;
  }

  getBills(apartment: Apartment): Bill[] {
    return this.bills.filter((x) => x.apartment == apartment);
  }
}
