import { Component } from '@angular/core';
import { MenuSelector } from 'src/app/enums/menu-selector';

@Component({
  selector: 'npm-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.less'],
})
export class LandlordComponent {
  //make the enum visible in html component
  MenuSelector = MenuSelector;

  selectedMenu = MenuSelector.Tenant;

  onMenuClicked(menu: MenuSelector) {
    this.selectedMenu = menu;
  }
}
