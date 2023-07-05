import { BillType } from '../enums/bill-type';

export class Bill {
  type: BillType;
  amount: number;
  dueTo: Date;
  description: string;
  constructor(
    type: BillType,
    amount: number,
    dueTo: Date,
    description: string
  ) {
    this.type = type;
    this.amount = amount;
    this.dueTo = dueTo;
    this.description = description;
  }
}
