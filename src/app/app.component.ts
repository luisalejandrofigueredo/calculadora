import { AfterViewChecked, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {  DialogodeerrorComponent } from "./dialogodeerror/dialogodeerror.component";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AutoscrollDirective  } from "./autoscroll.directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatFormFieldModule, TextFieldModule, MatInputModule, MatIconModule, MatDialogModule, ScrollingModule, AutoscrollDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
  calculo = '0';
  flagPunto = false;
  readonly dialog = inject(MatDialog);
  @ViewChild('miInput') miInput: ElementRef | undefined;
  simulateArrowDown() {
    this.miInput!.nativeElement.scrollTop = this.miInput!.nativeElement.scrollHeight;
  }
  uno() {
    if (this.calculo === '0') {
      this.calculo = '1';
    } else {
      this.calculo = this.calculo + '1';
    }
  }
  dos() {
    if (this.calculo === '0') {
      this.calculo = '2';
    } else {
      this.calculo = this.calculo + '2';
    }
  }
  tres() {
    if (this.calculo === '0') {
      this.calculo = '3';
    } else {
      this.calculo = this.calculo + '3';
    }
  }
  cuatro() {
    if (this.calculo === '0') {
      this.calculo = '4';
    } else {
      this.calculo = this.calculo + '4';
    }
  }
  cinco() {
    if (this.calculo === '0') {
      this.calculo = '5';
    } else {
      this.calculo = this.calculo + '5';
    }
  }
  seis() {
    if (this.calculo === '0') {
      this.calculo = '6';
    } else {
      this.calculo = this.calculo + '6';
    }
  }
  siete() {
    if (this.calculo === '0') {
      this.calculo = '7';
    } else {
      this.calculo = this.calculo + '7';
    }
  }
  ocho() {
    if (this.calculo === '0') {
      this.calculo = '8';
    } else {
      this.calculo = this.calculo + '8';
    }
  }
  nueve() {
    if (this.calculo === '0') {
      this.calculo = '9';
    } else {
      this.calculo = this.calculo + '9';
    }
  }
  cero() {
    if (this.calculo !== '0') {
      this.calculo = this.calculo + '0';
    }
  }
  suma() {
    this.calculo = this.calculo + "+";
    this.flagPunto = false;
  }
  resta() {
    this.calculo = this.calculo + "-"; 
    this.flagPunto = false;
  }
  multiplicacion() {
    this.calculo = this.calculo + "*";
    this.flagPunto = false;
  }
  division() {
    this.calculo = this.calculo + "/";
    this.flagPunto = false;
  }
  abro_parentesis() {
    this.calculo = this.calculo + "(";    
  }
  cierro_parentesis() {
    this.calculo = this.calculo + ")";
  } 
  punto() {
    if (this.flagPunto === false) {
      if (this.calculo === '0') {
        this.calculo = '0.';
      } else {
        this.calculo = this.calculo + '.';
      }
      this.flagPunto = true
    }
  }
  borrar() {
    this.calculo = '0';
    this.flagPunto = false;
  }
  borrarUltimo() {
    if (this.calculo !== '0') {
      this.calculo = this.calculo.slice(0, -1);
    }
  }
  total() {
    try {
      this.calculo = this.calculo + "\n" + window.eval(this.calculo) + "\n";
    } catch (error) {
      const dialogRef = this.dialog.open(DialogodeerrorComponent);
      dialogRef.afterClosed().subscribe(result => {
      })         
    }
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key === '('){
      this.abro_parentesis(); 
    }
    if(event.key === ')'){
      this.cierro_parentesis(); 
    }  
    if (event.key === '1') {
      this.uno();
    }
    if (event.key === '2') {
      this.dos();
    }
    if (event.key === '3') {
      this.tres();
    }
    if (event.key === '4') {
      this.cuatro();
    }
    if (event.key === '5') {
      this.cinco();
    }
    if (event.key === '6') {
      this.seis();
    }
    if (event.key === '7') {
      this.siete();
    }
    if (event.key === '8') {
      this.ocho();
    }
    if (event.key === '9') {
      this.nueve();
    }
    if (event.key === '0') {
      this.cero();
    }
    if (event.key === '+') {
      this.suma();
    }
    if (event.key === '-') {
      this.resta();
    }
    if (event.key === '*') {
      this.multiplicacion();
    }
    if (event.key === '/') {
      this.division();
    }
    if (event.key === '.') {
      this.punto();
    }
    if (event.key === 'Enter') {
      this.total();
    }
    if (event.key === 'Backspace') {
      this.borrarUltimo();
    }
    if (event.key === 'C') {
      this.borrar();
    }
  }

 
}
