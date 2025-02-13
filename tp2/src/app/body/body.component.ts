import { Component } from '@angular/core';
import { ServicesComponent } from './services/services.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.sass'
})
export class BodyComponent {

}
