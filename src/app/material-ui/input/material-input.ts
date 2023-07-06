import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'material-input',
  styleUrls: ['material-input.less'],
  templateUrl: 'material-input.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class MaterialInput {
  @Input() placeholder = '';
  @Input() text = '';
  @Input() label = '';
  @Input() width = '15vw';
  @Input() height = 'auto';
  @Input() fontSize = 'auto';
  @Input() type = 'text';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(value: string) {
    this.onChange.emit(value);
  }
}
