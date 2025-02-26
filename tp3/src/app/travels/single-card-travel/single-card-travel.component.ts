import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  imports:[BoutonSupprimerComponent],
  templateUrl: './single-card-travel.component.html',
  styleUrl: './single-card-travel.component.scss'
})
export class SingleCardTravelComponent {

  @Input() travel!: Travel;
  @Input() supprimerTravel?: (id: string) => void;

  // Bloque la propagation du clic pour empêcher la redirection
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}

