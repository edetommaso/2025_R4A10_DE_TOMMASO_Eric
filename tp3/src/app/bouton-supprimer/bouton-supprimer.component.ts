import { Component,Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface Travel {
  id: string;
  destination: string;
  description: string;
  prix: number;
  representation:string;
}

@Component({
  selector: 'app-bouton-supprimer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './bouton-supprimer.component.html',
  styleUrl: './bouton-supprimer.component.scss'
})
export class BoutonSupprimerComponent {
  
  route="/";
  
  @Input() travel!: Travel; 
  @Input() supprimerTravel?: (id: string) => void;
  
  
supression() {
  if (!this.travel) {
    console.error("Erreur: Aucun voyage défini !");
    return;
  }
  console.log("ID à supprimer :", this.travel.id);
  this.supprimerTravel?.(this.travel.id);
}

}
