import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Tenant } from 'src/app/models/tenant';
import { TenantService } from 'src/app/pages/main-pages/landlord-page/menus/tenant/tenant.service';

@Component({
  selector: 'tenant-selector',
  templateUrl: './tenant-selector.component.html',
})
export class TenantSelectorComponent implements OnInit {
  tenantNames: string[] = [];
  tenantIds: number[] = [];

  tenantOptions: string[] = [];

  @Output() onChange: EventEmitter<Tenant> = new EventEmitter<Tenant>();
  @Input() selectedTenantName: string =
    this.tenantService.getTenantById(0).name;
  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenantNames = this.tenantService.tenants.map((x) => x.name);
    this.tenantIds = this.tenantService.tenants.map((x) => x.id);
    this.tenantOptions.push('None');
    for (let index = 0; index < this.tenantNames.length; index++) {
      this.tenantOptions.push(
        'id: ' +
          this.tenantIds[index].toString() +
          ', name: ' +
          this.tenantNames[index]
      );
    }
  }

  onChanged(object: string) {
    if (object == 'None') {
      this.onChange.emit(Tenant.None);
    }
    let match = object.match(/\d+/);
    if (match == null) {
      return;
    }
    const id = +match[0];
    this.onChange.emit(this.tenantService.getTenantById(id));
  }
}
