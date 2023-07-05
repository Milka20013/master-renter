import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from './bill.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BillType } from 'src/app/enums/bill-type';
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
  type: BillType = BillType.None;
  amount: number = 0;
  dueTo: Date = new Date();
  description: string = '';
  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bills = this.billService.bills;
    this.billTypes = Object.keys(this.billEnum).filter((x) => !!!+x);
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
  registerBill() {
    this.billService.registerBill(
      new Bill(this.type, this.amount, this.dueTo, this.description)
    );
  }
}
