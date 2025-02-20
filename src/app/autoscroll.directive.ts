import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appAutoscroll]'
})
export class AutoscrollDirective implements AfterViewChecked {
  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }
  
}