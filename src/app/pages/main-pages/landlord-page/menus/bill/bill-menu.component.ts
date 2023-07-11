import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import { BillService } from './bill.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BillType } from 'src/app/enums/bill-type';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from '../apartment/apartment.service';
import { BillStatus } from 'src/app/enums/bill-status';
import { Router } from '@angular/router';
import { BillUpdater } from 'src/app/ui-utils/updaters/bill-updater';
import { Tenant } from 'src/app/models/tenant';
@Component({
  selector: 'npm-bill',
  templateUrl: './bill-menu.component.html',
  styleUrls: ['./bill-menu.component.less'],
})
export class BillMenuComponent implements OnInit {
  bills: Bill[] = [];
  billUpdater: BillUpdater;

  constructor(
    private billService: BillService,
    private apartmentService: ApartmentService,
    private router: Router
  ) {
    this.billUpdater = this.initBillUpdater();
  }

  initBillUpdater(): BillUpdater {
    return new BillUpdater(
      new Bill(
        this.billService.newId(),
        BillType.None,
        0,
        new Date(),
        '',
        Tenant.None,
        Apartment.None
      ),
      this.apartmentService
    );
  }
  refreshBillUpdater() {
    this.billUpdater.refresh(this.billService.newId());
  }
  ngOnInit(): void {
    this.bills = this.billService.bills;
  }
  onRowClick(i: number) {
    this.router.navigate(['bill', i]);
  }
  registerBill() {
    this.billService.registerBill(this.billUpdater.bill);
    this.refreshBillUpdater();
  }
}
