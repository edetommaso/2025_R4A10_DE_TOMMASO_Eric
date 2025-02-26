import { Component } from '@angular/core';
import { BoutonGenererComponent } from '../bouton-generer/bouton-generer.component';
import { TravelsService } from '../travels.service';

@Component({
  selector: 'app-generatepage',
  standalone: true,
  imports: [BoutonGenererComponent,],
  templateUrl: './generatepage.component.html',
  styleUrl: './generatepage.component.scss'
})
export class GeneratePageComponent {
  
  constructor(private travelsService: TravelsService) {}
  
  generateTravel = () => {
    this.travelsService.generateTravel();
  };
}