import { Component } from '@angular/core';
import { MenuSelector } from 'src/app/enums/menu-selector';

@Component({
  selector: 'npm-landlord',
  templateUrl: './landlord-page.component.html',
  styleUrls: ['./landlord-page.component.less'],
})
export class LandlordPageComponent {
  MenuSelector = MenuSelector;

  selectedMenu = MenuSelector.Tenant;

  onMenuClicked(menu: MenuSelector) {
    this.selectedMenu = menu;
  }
}
