import { Component,Input } from '@angular/core';

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
  imports: [],
  templateUrl: './bouton-supprimer.component.html',
  styleUrl: './bouton-supprimer.component.scss'
})
export class BoutonSupprimerComponent {

  
  @Input() travel!: Travel;  // Récupère le voyage à supprimer
  @Input() supprimerTravel?: (id: string) => void; // Fonction de suppression à injecter
  
  
  supression(){
    console.log("ID à supprimer :", this.travel.id);
    if (this.supprimerTravel) {
      this.supprimerTravel(this.travel.id);
    } else {
      console.error("Erreur: supprimerTravel est undefined !");
    }
  }
}
