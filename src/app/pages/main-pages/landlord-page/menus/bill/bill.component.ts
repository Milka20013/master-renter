import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from './bill.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'npm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less'],
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];

  type: string = '';
  amount: number = 0;
  dueTo: Date = new Date();
  description: string = '';
  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bills = this.billService.bills;
  }

  updateType(type: string) {
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
