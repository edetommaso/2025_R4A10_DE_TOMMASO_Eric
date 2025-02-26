import { Component, Input } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { BoutonSupprimerComponent } from '../../bouton-supprimer/bouton-supprimer.component';

export interface Travel {
  id: string;
  destination: string;
  description: string;
  prix: number;
  representation: string;
}

@Component({
  selector: 'app-single-card-travel',
  standalone: true,
  imports:[BoutonSupprimerComponent,RouterLink,RouterLinkActive],
  templateUrl: './single-card-travel.component.html',
  styleUrl: './single-card-travel.component.scss'
})
export class SingleCardTravelComponent {
  
  @Input() travel!: Travel;
  @Input() supprimerTravel?: (id: string) => void;
  
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}

