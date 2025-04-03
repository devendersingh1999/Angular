import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-couter',
  standalone:true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.css'
})
export class CouterComponent {


  couterValue = signal(0);

  increment (){

    this.couterValue.update((value) => value + 1);
  }

  decrement (){

    this.couterValue.update((value) => value - 1 );

  }

  reset (){

    this.couterValue.set(0);
  }
}
