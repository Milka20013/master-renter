import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/models/tenant';
import { TenantService } from '../landlord-page/menus/tenant/tenant.service';
import { TenantUpdater } from 'src/app/ui-utils/updaters/tenant-updater';
import { ApartmentService } from '../landlord-page/menus/apartment/apartment.service';

@Component({
  selector: 'npm-tenant',
  templateUrl: './tenant-page.component.html',
  styleUrls: ['./tenant-page.component.less'],
})
export class TenantPageComponent implements OnInit {
  id: number = -1;
  private sub: any;
  tenant!: Tenant;
  tenantUpdater!: TenantUpdater;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tenantService: TenantService,
    private apartmentService: ApartmentService
  ) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.tenant = this.tenantService.getTenantById(this.id);
    this.tenantUpdater = new TenantUpdater(this.tenant, this.apartmentService);
  }
}