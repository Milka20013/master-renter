import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BillStatus } from 'src/app/enums/bill-status';
import { BillType } from 'src/app/enums/bill-type';
import { Apartment } from 'src/app/models/apartment';
import { Bill } from 'src/app/models/bill';
import { ApartmentService } from 'src/app/pages/main-pages/landlord-page/menus/apartment/apartment.service';

export class BillUpdater {
  bill: Bill;
  constructor(bill: Bill, private apartmentService: ApartmentService) {
    this.bill = bill;
  }
  updateType(type: string | BillType) {
    if (typeof type == 'string') {
      this.bill.type = <BillType>(<unknown>type);
    } else {
      this.bill.type = type;
    }
  }
  updateAmount(amount: number | string) {
    this.bill.amount = +amount;
  }
  updateDueTo(dueTo: string | MatDatepickerInputEvent<Date>) {
    if (typeof dueTo == 'string') {
      this.bill.dueTo = new Date(dueTo);
    } else {
      if (dueTo.value !== null) this.bill.dueTo = dueTo.value;
    }
  }
  updateApartment(apartment: string | Apartment) {
    if (typeof apartment == 'string') {
      this.bill.apartment = this.apartmentService.getApartment(apartment);
    } else {
      this.bill.apartment = apartment;
    }
  }
  updateDescription(description: string) {
    this.bill.description = description;
  }
  updateStatus(status: string | BillStatus) {
    if (typeof status == 'string') {
      this.bill.status = <BillStatus>(<unknown>status);
    } else {
      this.bill.status = status;
    }
  }

  refresh(id: number) {
    this.bill = new Bill(
      id,
      this.bill.type,
      this.bill.amount,
      this.bill.dueTo,
      this.bill.description,
      this.bill.apartment
    );
  }
}
