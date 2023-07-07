import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'material-date-picker',
  templateUrl: 'material-date-picker.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class MaterialDatePicker {
  @Input() placeHolder: any = 'Choose a date';
  @Input() selectedValue: Date = new Date(Date.now());
  @Input() width: string = '15vw';
  @Output()
  onDateChange: EventEmitter<MatDatepickerInputEvent<Date>> = new EventEmitter<
    MatDatepickerInputEvent<Date>
  >();

  onDateChanged(event: MatDatepickerInputEvent<Date>) {
    this.onDateChange.emit(event);
  }
}
