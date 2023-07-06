import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from '../main-pages/landlord-page/menus/apartment/apartment.service';
import { Bill } from 'src/app/models/bill';
import { BillService } from '../main-pages/landlord-page/menus/bill/bill.service';
import { BillStatus } from 'src/app/enums/bill-status';

@Component({
  selector: 'npm-apartment-page',
  templateUrl: './apartment-page.component.html',
  styleUrls: ['./apartment-page.component.less'],
})
export class ApartmentPageComponent implements OnInit, OnDestroy {
  id: number = -1;
  private sub: any;
  apartment: Apartment = Apartment.None;
  editing: boolean = false;
  bills: Bill[] = [];
  billStatus = BillStatus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apartmentService: ApartmentService,
    private billService: BillService
  ) {}
  updateName(name: string) {
    this.apartment.name = name;
  }
  updateAddress(address: string) {
    this.apartment.address = address;
  }
  updateRent(rent: number) {
    this.apartment.rent = rent;
  }

  navigateToLandlordPage() {
    this.router.navigate(['landlord']);
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.apartment = this.apartmentService.getApartmentById(this.id);
    this.bills = this.billService.getBills(this.apartment);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
