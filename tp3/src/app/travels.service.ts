import { Injectable } from '@angular/core';
import { Travel } from './travels/travels.component';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  private travels: Travel[] = [
    {
      id: this.generateId(),
      destination: 'Paris',
      description: 'Visitez la Tour Eiffel et le Louvre.',
      prix: 500
    },
    {
      id: this.generateId(),
      destination: 'New York',
      description: 'Découvrez la ville qui ne dort jamais.',
      prix: 1000
    },
    {
      id: this.generateId(),
      destination: 'Boston',
      description: 'Découvrez la ville des gagnants.',
      prix: 1600
    }
  ];

  constructor() {
    this.loadTravel();
  }

  // ✅ Obtenir tous les voyages
  getTravel(): Travel[] {
    return this.travels;
  }

  // ✅ Ajouter un voyage
  addTravel(travels: Travel) {
    this.travels.push(travels);
    this.saveTravels();
  }

  // ✅ Supprimer un voyage
  delTravel(id: string) {
    this.travels = this.travels.filter(v => v.id !== id);
    this.saveTravels();
  }

  // ✅ Récupérer un voyage par ID
  getTravelById(id: string): Travel | undefined {
    return this.travels.find(v => v.id === id);
  }

  // ✅ Générer un ID unique
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // ✅ Sauvegarde dans localStorage
  private saveTravels() {
    localStorage.setItem('voyages', JSON.stringify(this.travels));
  }

  // ✅ Charger les voyages sauvegardés
  private loadTravel() {
    const data = localStorage.getItem('voyages');
    if (data) {
      this.travels = JSON.parse(data);
    }
  }
}
