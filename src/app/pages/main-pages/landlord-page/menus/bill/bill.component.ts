import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from './bill.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BillType } from 'src/app/enums/bill-type';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from '../apartment/apartment.service';
import { BillStatus } from 'src/app/enums/bill-status';
interface NamedBill {
  name: string;
}
@Component({
  selector: 'npm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less'],
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];
  billEnum = BillType;
  billTypes: string[] = [];
  billStatus = BillStatus;
  type: BillType = BillType.None;
  amount: number = 0;
  dueTo: Date = new Date();
  description: string = '';
  apartment: Apartment = Apartment.None;

  apartmentNames: string[] = [];
  constructor(
    private billService: BillService,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit(): void {
    this.bills = this.billService.bills;
    this.billTypes = Object.keys(this.billEnum).filter((x) => !!!+x);
    this.apartmentNames = this.apartmentService.apartments.map((x) => x.name);
  }
  onRowClick(i: number) {
    console.log(i);
  }
  updateType(type: BillType) {
    this.type = type;
  }
  updateAmount(amount: number) {
    this.amount = amount;
  }
  updateDueTo(event: MatDatepickerInputEvent<Date>) {
    if (event.value == null) {
      return;
    }
    this.dueTo = event.value;
  }
  updateDescription(description: string) {
    this.description = description;
  }
  updateApartment(apartmentName: string) {
    this.apartment = this.apartmentService.getApartment(apartmentName);
  }
  registerBill() {
    this.billService.registerBill(
      new Bill(
        this.type,
        this.amount,
        this.dueTo,
        this.description,
        this.apartment
      )
    );
  }
}
