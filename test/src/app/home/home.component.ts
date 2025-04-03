import { Component } from '@angular/core';
import { CouterComponent } from "./couter/couter.component";

@Component({
  selector: 'app-home',
  imports: [CouterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
