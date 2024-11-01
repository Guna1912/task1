import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApply]'
})
export class ApplyDirective {

  constructor(p:ElementRef) { 

  p.nativeElement.style.color="red"  }

}
