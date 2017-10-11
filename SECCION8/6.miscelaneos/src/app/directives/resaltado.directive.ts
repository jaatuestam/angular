import { Directive,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el : ElementRef) {
    console.log("directiva llamada");
    // el.nativeElement.style.backgroundColor="yellow";
  }

  @Input ("appResaltado") fondo:string;

  @HostListener('mouseenter') mouseEntro(){
    // console.log(this.fondo);
    this.resaltar(this.fondo || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
