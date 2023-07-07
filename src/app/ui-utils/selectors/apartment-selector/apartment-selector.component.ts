import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/pages/main-pages/landlord-page/menus/apartment/apartment.service';

@Component({
  selector: 'apartment-selector',
  templateUrl: './apartment-selector.component.html',
})
export class ApartmentSelectorComponent {
  apartmentNames: string[] = [];
  constructor(private apartmentService: ApartmentService) {
    this.apartmentNames = apartmentService.apartments.map((x) => x.name);
  }
  @Output() onChange: EventEmitter<Apartment> = new EventEmitter<Apartment>();
  @Input() selectedApartment: Apartment = Apartment.None;

  onChanged(apartmentName: string) {
    this.onChange.emit(this.apartmentService.getApartment(apartmentName));
  }
}
