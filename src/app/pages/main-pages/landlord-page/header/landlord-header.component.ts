import { Component, EventEmitter, Output } from '@angular/core';
import { MenuSelector } from 'src/app/enums/menu-selector';

@Component({
  selector: 'npm-landlord-header',
  templateUrl: './landlord-header.component.html',
  styleUrls: ['./landlord-header.component.less'],
})
export class LandlordHeaderComponent {
  MenuSelector = MenuSelector;
  @Output() onMenuClicked: EventEmitter<MenuSelector> =
    new EventEmitter<MenuSelector>();

  clickMenu(menu: MenuSelector) {
    this.onMenuClicked.emit(menu);
  }
}
