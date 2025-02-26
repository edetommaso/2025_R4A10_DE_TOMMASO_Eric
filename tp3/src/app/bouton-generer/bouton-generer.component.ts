import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-bouton-generer',
  standalone: true,
  imports: [],
  templateUrl: './bouton-generer.component.html',
  styleUrl: './bouton-generer.component.scss'
})
export class BoutonGenererComponent {
  
  @Input() generateTravel?: () => void; 
  
  onGenerate() {
    if (typeof this.generateTravel === 'function') { // Vérifie si la fonction est définie
      this.generateTravel();
    } else {
      console.error("Erreur: generateTravel n'est pas défini !");
    }
  }
}
