import { Component } from '@angular/core';
import { BoutonGenererComponent } from '../bouton-generer/bouton-generer.component';
import { TravelsService } from '../travels.service';
import { Travel } from '../travels/travels.component';

@Component({
  selector: 'app-generatepage',
  standalone: true,
  imports: [BoutonGenererComponent],
  templateUrl: './generatepage.component.html',
  styleUrl: './generatepage.component.scss'
})
export class GeneratePageComponent {
  generatedTravel?: Travel;

  constructor(private travelsService: TravelsService) {}

  generateTravel = () => {
    this.generatedTravel = this.travelsService.generateTravel();
  };
  
  confirmTravel = () => {
    if (this.generatedTravel && confirm(`Confirmer le voyage vers ${this.generatedTravel.destination} ?`)) {
      this.travelsService.addTravel(this.generatedTravel);
      this.generatedTravel = undefined;
    }
  };
}
