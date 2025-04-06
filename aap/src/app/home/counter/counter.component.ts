import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterLink],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counterValue = signal(0);

  increment(){

    this.counterValue.update((m) => m +1);
  }
  decrement(){
    this.counterValue.update((m) => m -1);

  }
  reset(){

    this.counterValue.set(0);
  }
  
}
