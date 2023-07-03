import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from './bill.service';

@Component({
  selector: 'npm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.less'],
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bills = this.billService.bills;
  }

  registerBill() {
    const type = (<HTMLInputElement>document.getElementById('type')).value;
    const amount: number = +(<HTMLInputElement>(
      document.getElementById('amount')
    )).value;
    const dueTo: Date = new Date(
      (<HTMLInputElement>document.getElementById('dueTo')).value
    );
    const description = (<HTMLInputElement>document.getElementById('desc'))
      .value;
    this.billService.registerBill(new Bill(type, amount, dueTo, description));
  }
}
