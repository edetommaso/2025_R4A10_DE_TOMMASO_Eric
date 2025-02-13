import { Component } from '@angular/core';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.sass'
})
export class ElementComponent {
  titre= "Virtual healtcare for you";
  contenue= "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";

  illustration= "/assets/virtual-healthcare.png"
}
