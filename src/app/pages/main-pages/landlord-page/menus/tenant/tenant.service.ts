import { Injectable } from '@angular/core';
import { Tenant } from 'src/app/models/tenant';
import { ApartmentService } from '../apartment/apartment.service';
import { BillService } from '../bill/bill.service';
import { Bill } from 'src/app/models/bill';
import { BillType } from 'src/app/enums/bill-type';
import { BillStatus } from 'src/app/enums/bill-status';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  private _tenants: Tenant[] = [
    Tenant.None,
    new Tenant(
      1,
      'asd',
      new Date('2000/01/01'),
      new Date('2000/02/01'),
      this.apartmentService.getApartmentById(1)
    ),
    new Tenant(
      2,
      'asd2',
      new Date('2000/01/01'),
      new Date('2000/02/01'),
      this.apartmentService.getApartmentById(2)
    ),
  ];
  constructor(
    private apartmentService: ApartmentService,
    private billService: BillService
  ) {}

  public newId(): number {
    let maxId = -1;
    for (let index = 0; index < this._tenants?.length; index++) {
      if (maxId < this._tenants[index].id) {
        maxId = this._tenants[index].id;
      }
    }
    return maxId + 1;
  }
  getTenantById(id: number): Tenant {
    return this._tenants.filter((x) => x.id == id)[0];
  }
  registerTenant(tenant: Tenant) {
    this._tenants.push(tenant);
  }

  unregisterTenant(tenant: Tenant) {
    const index = this._tenants.indexOf(tenant);
    if (index < 0) {
      console.error('Tenant could not be found');
      return;
    }
    this._tenants.splice(index, 1);
  }

  generateFinalBill(tenant: Tenant) {
    if (tenant.bills.filter((x) => x.type == BillType.Final).length) {
      return;
    }
    let bill: Bill = new Bill(
      this.billService.newId(),
      BillType.Final,
      this.finalBillAmount(tenant),
      new Date(Date.now() + 1000 * 3600 * 24 * 30),
      'Final bill',
      tenant,
      tenant.apartment
    );
    if (bill.amount == 0) {
      bill.status = BillStatus.Paid;
    }
    this.billService.registerBill(bill);
  }

  generateMonthlySettlement(tenant: Tenant): Bill[] {
    let bills: Bill[] = [];
    const billsByApartment: Bill[] = this.billService.getBillsByApartment(
      tenant.apartment
    );
    bills = billsByApartment.filter(
      (x) => x.status != BillStatus.Acknowledged && x.status != BillStatus.Paid
    );
    bills = bills.concat(tenant.unpaidBills);
    bills = Array.from(new Set(bills));
    return bills;
  }

  private finalBillAmount(tenant: Tenant): number {
    let amount = 0;
    for (const bill of tenant.bills) {
      if (bill.type == BillType.Deposit) {
        amount -= bill.amount;
        continue;
      }
      if (
        bill.status == BillStatus.Registered ||
        bill.status == BillStatus.Late
      ) {
        amount += bill.amount;
      }
    }
    return amount;
  }
  public get tenants(): Tenant[] {
    for (const tenant of this._tenants) {
      let dueTo = tenant.isRentDue();
      if (!!dueTo) {
        tenant.bills.push(this.billService.generateRentBill(tenant, dueTo));
      }
    }
    return this._tenants.filter((x) => x.id > 0);
  }
}
