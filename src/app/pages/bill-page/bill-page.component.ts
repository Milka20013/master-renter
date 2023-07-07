import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../main-pages/landlord-page/menus/bill/bill.service';
import { Bill } from 'src/app/models/bill';
import { BillType } from 'src/app/enums/bill-type';
import { BillStatus } from 'src/app/enums/bill-status';
import { Apartment } from 'src/app/models/apartment';
import { BillUpdater } from 'src/app/ui-utils/updaters/bill-updater';
import { ApartmentService } from '../main-pages/landlord-page/menus/apartment/apartment.service';

@Component({
  selector: 'npm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.less'],
})
export class BillPageComponent implements OnInit, OnDestroy {
  id: number = -1;
  private sub: any;
  bill!: Bill;
  billUpdater!: BillUpdater;

  billType = BillType;
  billStatus = BillStatus;

  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billService: BillService,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.bill = this.billService.getBillById(this.id);
    this.billUpdater = new BillUpdater(this.bill, this.apartmentService);
  }
  navigateToLandlordPage() {
    this.router.navigate(['landlord']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
