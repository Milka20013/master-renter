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
@Component({
  selector: 'npm-bill',
  templateUrl: './bill-menu.component.html',
  styleUrls: ['./bill-menu.component.less'],
})
export class BillMenuComponent implements OnInit {
  bills: Bill[] = [];
  billUpdater: BillUpdater;

  billType = BillType;
  billTypes: string[] = [];
  billStatus = BillStatus;

  constructor(
    private billService: BillService,
    private apartmentService: ApartmentService,
    private router: Router
  ) {
    //this way is to tell the compiler that the updater is set
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
    this.billTypes = Object.keys(this.billType).filter((x) => !!!+x);
  }
  onRowClick(i: number) {
    this.router.navigate(['bill', i]);
  }
  registerBill() {
    this.billService.registerBill(this.billUpdater.bill);
    this.refreshBillUpdater();
  }
}
