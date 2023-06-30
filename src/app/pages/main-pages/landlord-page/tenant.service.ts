import { Injectable } from '@angular/core';
import { Tenant } from 'src/app/models/tenant';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  private _tenants: Tenant[] = [
    new Tenant('asd', new Date('2000/01/01'), new Date('2000/02/01'), 6),
    new Tenant('asd2', new Date('2000/01/01'), new Date('2000/02/01'), 10),
  ];
  constructor() {}

  registerTenant(tenant: Tenant) {
    this._tenants.push(tenant);
  }

  unregisterTenant(tenant: Tenant) {
    const index = this._tenants.indexOf(tenant);
    this._tenants.splice(index, 1);
  }

  public get tenants(): Tenant[] {
    return this._tenants;
  }
}
