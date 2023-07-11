import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialButton } from 'src/app/material-ui/button/material-button';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'tenant-remove-dialog.component.html',
  styleUrls: ['tenant-remove-dialog.component.less'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MaterialButton,
  ],
})
export class TenantRemoveDialogComponent {
  constructor(public dialogRef: MatDialogRef<TenantRemoveDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  remove() {
    this.dialogRef.close(true);
  }
}
