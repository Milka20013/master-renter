import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'material-select',
  templateUrl: 'material-select.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule,
  ],
})
export class MaterialSelect {
  @Input() options: any[] = [];
  @Input() placeHolder: string = 'Options';
  @Input() width: string = '15vw';

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  onChanged(event: any) {
    this.onChange.emit(event);
  }
}
