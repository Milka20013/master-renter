import { BillStatus } from '../enums/bill-status';
import { BillType } from '../enums/bill-type';
import { Apartment } from './apartment';
import { Tenant } from './tenant';

export class Bill {
  id: number;
  type: BillType;
  amount: number;
  dueTo: Date;
  description: string;
  apartment: Apartment;
  tenant: Tenant;
  public status: BillStatus;
  constructor(
    id: number,
    type: BillType,
    amount: number,
    dueTo: Date,
    description: string,
    tenant: Tenant,
    apartment: Apartment
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.dueTo = dueTo;
    this.description = description;
    this.tenant = tenant;
    this.apartment = apartment;
    this.status = BillStatus.Registered;
  }

  checkStatus() {
    if (this.dueTo.getTime() < Date.now()) {
      this.status = BillStatus.Late;
    }
  }
}
