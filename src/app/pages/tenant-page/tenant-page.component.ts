import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/models/tenant';
import { TenantService } from '../main-pages/landlord-page/menus/tenant/tenant.service';
import { TenantUpdater } from 'src/app/ui-utils/updaters/tenant-updater';
import { ApartmentService } from '../main-pages/landlord-page/menus/apartment/apartment.service';
import { BillStatus } from 'src/app/enums/bill-status';
import { BillType } from 'src/app/enums/bill-type';

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
  editing: boolean = false;
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
    if (this.tenant.isRentDue()) {
      console.log('due');
    } else {
      console.log('no');
    }
  }

  navigateToLandlordPage() {
    this.router.navigate(['landlord']);
  }
}
