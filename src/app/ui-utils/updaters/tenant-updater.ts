import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Apartment } from 'src/app/models/apartment';
import { Tenant } from 'src/app/models/tenant';
import { ApartmentService } from 'src/app/pages/main-pages/landlord-page/menus/apartment/apartment.service';

export class TenantUpdater {
  tenant: Tenant;
  constructor(tenant: Tenant, private apartmentService: ApartmentService) {
    this.tenant = tenant;
    this.tenant;
  }
  updateName(name: string) {
    this.tenant.name = name;
  }
  updateEntryDate(entryDate: string | MatDatepickerInputEvent<Date>) {
    if (typeof entryDate == 'string') {
      this.tenant.entryDate = new Date(entryDate);
    } else {
      if (entryDate.value !== null) this.tenant.entryDate = entryDate.value;
    }
  }
  updateExitDate(exitDate: string | MatDatepickerInputEvent<Date>) {
    if (typeof exitDate == 'string') {
      this.tenant.exitDate = new Date(exitDate);
    } else {
      if (exitDate.value !== null) this.tenant.exitDate = exitDate.value;
    }
  }
  updateApartment(apartment: string | Apartment) {
    if (typeof apartment == 'string') {
      this.tenant.apartment = this.apartmentService.getApartment(apartment);
    } else {
      this.tenant.apartment = apartment;
    }
  }

  refresh(id: number) {
    this.tenant = new Tenant(
      id,
      this.tenant.name,
      this.tenant.entryDate,
      this.tenant.exitDate,
      this.tenant.apartment
    );
  }
}
