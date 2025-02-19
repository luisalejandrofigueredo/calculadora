import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatFormFieldModule, TextFieldModule, MatInputModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
  calculo = '0';
  flagPunto = false
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
    this.calculo = this.calculo +"+"+"\n";
     this.flagPunto = false;
    
  }
  resta() { 
    this.calculo = this.calculo +"-"+"\n";
    this.flagPunto = false;
  }
  multiplicacion() {
    this.calculo = this.calculo +"*"+"\n";
    this.flagPunto = false;
   }
  division() { 
    this.calculo = this.calculo +"/"+"\n";
    this.flagPunto = false;
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
    borrarUltimo(){}
    total(){
      this.calculo = this.calculo+"\n"+eval(this.calculo);
    }
  }
