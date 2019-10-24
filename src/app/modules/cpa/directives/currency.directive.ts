import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {
  @HostListener('change', ['$event'])

  Change(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = parseFloat(input.value).toFixed(2);
  }
}
