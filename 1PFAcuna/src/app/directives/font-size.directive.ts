import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('appFontSize') fontSizeTitle! : string;
  
  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize = this.fontSizeTitle;
  }
}

