import { BillStatus } from '../enums/bill-status';
import { BillType } from '../enums/bill-type';
import { Apartment } from './apartment';

export class Bill {
  id: number;
  type: BillType;
  amount: number;
  dueTo: Date;
  description: string;
  apartment: Apartment;
  public status: BillStatus;
  constructor(
    id: number,
    type: BillType,
    amount: number,
    dueTo: Date,
    description: string,
    apartment: Apartment
  ) {
    this.id = id;
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
