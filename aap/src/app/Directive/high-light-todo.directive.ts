import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighLightTodo]',
  standalone:true,
})
export class HighLightTodoDirective {

 constructor (){}
 isCompleted = input<boolean>(false);

 el= inject(ElementRef);

 style = effect(() =>{

   if(this.isCompleted()){

     this.el.nativeElement.style.textDecoration="line-through";
     this.el.nativeElement.style.backgroundColor = "#d3f9d8";
     this.el.nativeElement.style.color = "#6c757d";
   }
   else{

     this.el.nativeElement.style.textDecoration = "none";
     this.el.nativeElement.style.backgroundColor = "#fff";
     this.el.nativeElement.style.color = "#000";


   }

 })

}
