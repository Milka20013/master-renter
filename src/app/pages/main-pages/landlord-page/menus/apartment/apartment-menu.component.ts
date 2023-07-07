import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';
import { Apartment } from 'src/app/models/apartment';
import { Router } from '@angular/router';
import { ApartmentUpdater } from 'src/app/ui-utils/updaters/apartment-updater';

@Component({
  selector: 'npm-apartment-menu',
  templateUrl: './apartment-menu.component.html',
  styleUrls: ['./apartment-menu.component.less'],
})
export class ApartmentMenuComponent implements OnInit {
  apartments: Apartment[] = [];
  apartmentUpdater: ApartmentUpdater;
  constructor(
    private apartmentSercive: ApartmentService,
    private router: Router
  ) {
    this.apartmentUpdater = this.initApartmentUpdater();
  }
  initApartmentUpdater(): ApartmentUpdater {
    return new ApartmentUpdater(
      new Apartment(this.apartmentSercive.newId(), '', '', 0)
    );
  }
  ngOnInit(): void {
    this.apartments = this.apartmentSercive.apartments;
  }

  navigateToApartmentPage(apartment: Apartment) {
    this.router.navigate(['apartment', apartment.id]);
  }

  registerApartment() {
    this.apartmentSercive.registerApartment(this.apartmentUpdater.apartment);
  }
}
