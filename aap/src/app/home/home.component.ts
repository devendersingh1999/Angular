import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from '../Form/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
