import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'material-button',
  templateUrl: 'material-button.html',
  styleUrls: ['material-button.less'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class MaterialButton {
  @Input() inputText = 'Primary';
}
