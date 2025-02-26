import { Injectable } from '@angular/core';
import { Travel } from './travels/travels.component';

@Injectable({
  providedIn: 'root'
})


export class TravelsService {

  private travels: Travel[] = [
    { id: this.generateId(),destination: 'Paris',description: 'Visitez la Tour Eiffel et le Louvre.',prix: 500,representation:'/assets/paris.webp'},
    { id: this.generateId(),destination: 'New York',description: 'Découvrez la ville qui ne dort jamais.',prix: 1000,representation:'/assets/new-york.webp' },
    { id: this.generateId(),destination: 'Boston',description: 'Découvrez la ville des gagnants.',prix: 1600,representation:'/assets/boston-outside.jpg' },
    { id: this.generateId(),destination: 'Villejuif',description: 'Top 3 des pires villes.',prix: 10,representation:'/assets/villejuif.jpg' },
  ];
  
  constructor() {}
  
  // ✅ Obtenir tous les voyages
  getTravel(): Travel[] {
    return this.travels;
  }
  
  // ✅ Ajouter un voyage
  addTravel(travel: Travel) {
    this.travels.push(travel);
  }
  
  // ✅ Supprimer un voyage
  delTravel(id: string) {
    this.travels = this.travels.filter(v => v.id !== id);
  }
  
  
  // ✅ Récupérer un voyage par ID
  getTravelById(id: string): Travel | undefined {
    return this.travels.find(v => v.id === id);
  }
  
  // ✅ Générer un ID unique
  private generateId(): string {
    return Math.random().toString().replace("0.","");
  }


}
