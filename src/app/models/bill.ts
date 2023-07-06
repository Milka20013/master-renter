import { BillStatus } from '../enums/bill-status';
import { BillType } from '../enums/bill-type';
import { Apartment } from './apartment';

export class Bill {
  type: BillType;
  amount: number;
  dueTo: Date;
  description: string;
  apartment: Apartment;
  public status: BillStatus;
  constructor(
    type: BillType,
    amount: number,
    dueTo: Date,
    description: string,
    apartment: Apartment
  ) {
    this.type = type;
    this.amount = amount;
    this.dueTo = dueTo;
    this.description = description;
    this.apartment = apartment;
    this.status = BillStatus.Registered;
  }

  checkStatus() {
    if (this.dueTo.getDate() < Date.now()) {
      this.status = BillStatus.Late;
    }
  }
}
