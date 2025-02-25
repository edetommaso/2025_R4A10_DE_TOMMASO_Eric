import { Component } from '@angular/core';
import { TravelsComponent } from '../travels/travels.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TravelsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  

}
