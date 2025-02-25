import { Component, Input } from '@angular/core';

export interface Travel {
  id: string;
  destination: string;
  description: string;
  prix: number;
}

@Component({
  selector: 'app-single-card-travel',
  standalone: true,
  templateUrl: './single-card-travel.component.html',
  styleUrl: './single-card-travel.component.scss'
})
export class SingleCardTravelComponent {
  @Input() travel!: Travel;
  @Input() supprimerTravel!: (id: string) => void;
}

