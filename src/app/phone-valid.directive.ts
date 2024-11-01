import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneValid]'
})
export class PhoneValidDirective {

  
  constructor(private phone_valid:ElementRef) { }

  @HostListener('keydown', ['$event'])
  @HostListener('input', ['$event'])
  onKeyDown(e: { key: string; target: { value: string; }; preventDefault: () => void; }) {
    const key = ['Backspace', 'Delete', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    let check =  key.includes(e.key) && /^\d{1,7}((.)|(.\d{0,3})?)$/.test(e.target.value);
    console.log(e);
    
    console.log(check)
    if (!check) {
      e.preventDefault();
    }
  }
}
