import { Injectable } from '@angular/core';
import { Bill } from 'src/app/models/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private _bills: Bill[] = [
    new Bill(
      'Electric bill',
      400,
      new Date('2023/07/30'),
      'You have to pay lmao'
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
    return this._bills;
  }
}
