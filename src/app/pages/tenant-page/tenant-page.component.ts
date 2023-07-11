import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/models/tenant';
import { TenantService } from '../main-pages/landlord-page/menus/tenant/tenant.service';
import { TenantUpdater } from 'src/app/ui-utils/updaters/tenant-updater';
import { ApartmentService } from '../main-pages/landlord-page/menus/apartment/apartment.service';
import { MatDialog } from '@angular/material/dialog';
import { TenantRemoveDialogComponent } from 'src/app/ui-utils/dialog/tenant-remove-dialog.component';
import { BillType } from 'src/app/enums/bill-type';
import { BillStatus } from 'src/app/enums/bill-status';

@Component({
  selector: 'npm-tenant',
  templateUrl: './tenant-page.component.html',
  styleUrls: ['./tenant-page.component.less'],
})
export class TenantPageComponent implements OnInit, OnDestroy {
  id: number = -1;
  private sub: any;
  tenant!: Tenant;
  tenantUpdater!: TenantUpdater;
  editing: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tenantService: TenantService,
    private apartmentService: ApartmentService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.tenant = this.tenantService.getTenantById(this.id);
    this.tenantUpdater = new TenantUpdater(this.tenant, this.apartmentService);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  removeTenantClicked() {
    if (
      this.tenant.bills.filter(
        (x) => x.type == BillType.Final && x.status == BillStatus.Acknowledged
      ).length
    ) {
      this.removeTenant();
      return;
    }
    this.openDialog();
  }

  removeTenant() {
    this.tenantService.unregisterTenant(this.tenant);
    this.navigateToLandlordPage();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TenantRemoveDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeTenant();
      }
    });
  }

  generateFinalBill() {
    this.tenantService.generateFinalBill(this.tenant);
  }

  navigateToLandlordPage() {
    this.router.navigate(['landlord']);
  }
}
