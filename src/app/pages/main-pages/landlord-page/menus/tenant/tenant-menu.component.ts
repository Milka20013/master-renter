import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { DbService } from 'src/app/db/db.service';
import { UserType } from 'src/app/enums/user-type';
import { Apartment } from 'src/app/models/apartment';
import { TenantService } from './tenant.service';
import { Tenant } from 'src/app/models/tenant';
import { ApartmentService } from '../apartment/apartment.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'npm-tenant-menu',
  templateUrl: './tenant-menu.component.html',
  styleUrls: ['./tenant-menu.component.less'],
})
export class TenantMenuComponent implements OnInit {
  showToken = false;
  token = Token.Empty;
  apartmentNames: string[] = [];
  tenants: Tenant[] = [];

  name: string = '';
  entryDate: Date = new Date();
  exitDate: Date = new Date();
  rent: number = 0;
  apartment: Apartment = Apartment.None;
  constructor(
    private dbService: DbService,
    private apartmentService: ApartmentService,
    private tenantService: TenantService
  ) {}
  ngOnInit(): void {
    this.apartmentNames = this.apartmentService.apartments.map((x) => x.name);
    this.tenants = this.tenantService.tenants;
  }
  generateToken() {
    this.token = this.dbService.generateToken(UserType.Tenant);
    this.showToken = true;
  }

  updateEntryDate(event: MatDatepickerInputEvent<Date>) {
    if (event.value == null) {
      return;
    }
    this.entryDate = event.value;
  }
  updateExitDate(event: MatDatepickerInputEvent<Date>) {
    if (event.value == null) {
      return;
    }
    this.exitDate = event.value;
  }
  updateName(name: string) {
    this.name = name;
  }
  updateRent(rent: number) {
    this.rent = rent;
  }

  updateApartment(apartmentName: string) {
    this.apartment = this.apartmentService.getApartment(apartmentName);
  }
  registerTenant() {
    if (!!!this.entryDate.getDate() || !!!this.exitDate.getDate()) {
      //one or more of the dates are invalid
      return;
    }
    this.tenantService.registerTenant(
      new Tenant(
        this.name,
        this.entryDate,
        this.exitDate,
        this.rent,
        this.apartment
      )
    );
  }

  unregisterTenant(tenant: Tenant) {
    this.tenantService.unregisterTenant(tenant);
  }

  modifyTenant(tenant: Tenant) {}
}
