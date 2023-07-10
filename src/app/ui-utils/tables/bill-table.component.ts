import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BillStatus } from 'src/app/enums/bill-status';
import { BillType } from 'src/app/enums/bill-type';
import { Bill } from 'src/app/models/bill';

@Component({
  selector: 'bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.less'],
})
export class BillTableComponent {
  @Input() bills: Bill[] = [];
  @Input() showApartment: boolean = false;
  billType = BillType;
  billStatus = BillStatus;

  constructor(private router: Router) {}

  onRowClicked(bill: Bill) {
    this.router.navigate(['bill', bill.id]);
  }
}
