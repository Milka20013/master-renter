import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from '../main-pages/landlord-page/menus/apartment/apartment.service';

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

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService
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
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.apartment = this.apartmentService.getApartmentById(this.id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
