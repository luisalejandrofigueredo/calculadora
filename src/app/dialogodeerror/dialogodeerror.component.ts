import { Component, inject } from '@angular/core';
import { MatDialogModule,MatDialogRef ,MatDialogActions} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogodeerror',
  imports: [MatDialogModule],
  templateUrl: './dialogodeerror.component.html',
  styleUrl: './dialogodeerror.component.scss'
})
export class DialogodeerrorComponent {
  readonly dialogRef = inject(MatDialogRef<DialogodeerrorComponent>);
}
