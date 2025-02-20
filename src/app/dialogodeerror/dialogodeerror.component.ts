import { Component, inject } from '@angular/core';
import { MatDialogModule,MatDialogRef ,MatDialogActions} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dialogodeerror',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './dialogodeerror.component.html',
  styleUrl: './dialogodeerror.component.scss'
})
export class DialogodeerrorComponent {
  readonly dialogRef = inject(MatDialogRef<DialogodeerrorComponent>);
}
