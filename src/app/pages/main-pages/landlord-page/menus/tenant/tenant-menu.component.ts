import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { DbService } from 'src/app/db/db.service';
import { UserType } from 'src/app/enums/user-type';
import { Apartment } from 'src/app/models/apartment';
import { TenantService } from './tenant.service';
import { Tenant } from 'src/app/models/tenant';
import { ApartmentService } from '../apartment/apartment.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TenantUpdater } from 'src/app/ui-utils/updaters/tenant-updater';
import { Router } from '@angular/router';

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
  tenantUpdater: TenantUpdater;

  constructor(
    private router: Router,
    private dbService: DbService,
    private apartmentService: ApartmentService,
    private tenantService: TenantService
  ) {
    this.tenantUpdater = this.initTenantUpdater();
  }

  initTenantUpdater(): TenantUpdater {
    return new TenantUpdater(
      new Tenant(
        this.tenantService.newId(),
        '',
        new Date(),
        new Date(),
        Apartment.None
      ),
      this.apartmentService
    );
  }
  refreshTenantUpdater() {
    this.tenantUpdater.refresh(this.tenantService.newId());
  }
  ngOnInit(): void {
    this.apartmentNames = this.apartmentService.apartments.map((x) => x.name);
    this.tenants = this.tenantService.tenants;
  }

  onRowClicked(tenant: Tenant) {
    this.router.navigate(['tenant', tenant.id]);
  }
  generateToken() {
    this.token = this.dbService.generateToken(UserType.Tenant);
    this.showToken = true;
  }

  registerTenant() {
    this.tenantService.registerTenant(this.tenantUpdater.tenant);
    this.refreshTenantUpdater();
  }
}
