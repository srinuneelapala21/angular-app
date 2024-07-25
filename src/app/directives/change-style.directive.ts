import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  constructor(private eleRef:ElementRef) {
    eleRef.nativeElement.style.color = 'green';
    eleRef.nativeElement.style.fontSize ='20px';
   }

}
