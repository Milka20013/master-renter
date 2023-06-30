import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { DbService } from 'src/app/db/db.service';
import { UserType } from 'src/app/enums/user-type';
import { Apartment } from 'src/app/models/apartment';
import { TenantService } from './tenant.service';
import { Tenant } from 'src/app/models/tenant';
import { ApartmentService } from '../apartment/apartment.service';

@Component({
  selector: 'npm-tenant-menu',
  templateUrl: './tenant-menu.component.html',
  styleUrls: ['./tenant-menu.component.less'],
})
export class TenantMenuComponent implements OnInit {
  showToken = false;
  token = Token.Empty;
  apartments: Apartment[] = [];
  tenants: Tenant[] = [];
  constructor(
    private dbService: DbService,
    private apartmentService: ApartmentService,
    private tenantService: TenantService
  ) {}
  ngOnInit(): void {
    this.apartments = this.apartmentService.apartments;
    this.tenants = this.tenantService.tenants;
  }
  generateToken() {
    this.token = this.dbService.generateToken(UserType.Tenant);
    this.showToken = true;
  }

  registerTenant() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const entryDate: Date = new Date(
      (<HTMLInputElement>document.getElementById('entry')).value
    );
    const exitDate: Date = new Date(
      (<HTMLInputElement>document.getElementById('exit')).value
    );
    if (!!!entryDate.getDate() || !!!exitDate.getDate()) {
      //one or more of the dates are invalid
      return;
    }
    const rent: number = +(<HTMLInputElement>document.getElementById('rent'))
      .value;
    const apartmentElement = <HTMLSelectElement>(
      document.getElementById('apartments')
    );
    const index = apartmentElement.selectedIndex;
    const apartment: Apartment = this.apartmentService.getApartment(
      apartmentElement.options[index].text
    );

    this.tenantService.registerTenant(
      new Tenant(name, entryDate, exitDate, rent, apartment)
    );
  }

  unregisterTenant(tenant: Tenant) {
    this.tenantService.unregisterTenant(tenant);
  }

  modifyTenant(tenant: Tenant) {}
}
