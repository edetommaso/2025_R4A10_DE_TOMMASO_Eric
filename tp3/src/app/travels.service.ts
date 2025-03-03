import { Injectable } from '@angular/core';
import { Travel } from './travels/travels.component';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  
  private travels: Travel[] = [
    { id: this.generateId(), destination: 'Paris', description: 'Visitez la Tour Eiffel et le Louvre.', prix: 500, representation: '/assets/paris.webp' },
    { id: this.generateId(), destination: 'New York', description: 'Découvrez la ville qui ne dort jamais.', prix: 1000, representation: '/assets/new-york.webp' },
    { id: this.generateId(), destination: 'Boston', description: 'Découvrez la ville des gagnants.', prix: 1600, representation: '/assets/boston-outside.jpg' },
    { id: this.generateId(), destination: 'Villejuif', description: 'Top 3 des pires villes.', prix: 10, representation: '/assets/villejuif.jpg' },
  ];
  
  constructor() {}

  getTravel(): Travel[] {
    return this.travels;
  }
  
  addTravel(travel: Travel) {
    this.travels.push(travel);
  }
  
  delTravel(id: string) {
    this.travels = this.travels.filter(v => v.id !== id);
  }
  
  getTravelById(id: string): Travel | undefined {
    return this.travels.find(v => v.id === id);
  }
  
  private generateId(): string {
    return Math.random().toString().replace("0.", "");
  }
  
  generateTravel(): Travel {
    const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const prix = PRIX[Math.floor(Math.random() * PRIX.length)];
    
    return {
      id: this.generateId(),
      destination,
      description,
      prix,
      representation: "/assets/sea.jpg"
    };
  }
}

export const DESTINATIONS: string[] = [
  'Bali, Indonésie', 'Kyoto, Japon', 'Santorin, Grèce', 'Reykjavik, Islande', 'Marrakech, Maroc',
  'Venise, Italie', 'Rio de Janeiro, Brésil', 'Phuket, Thaïlande', 'New York, États-Unis', 'Le Cap, Afrique du Sud',
  'Sydney, Australie', 'Hanoï, Vietnam', 'Toronto, Canada', 'Bangkok, Thaïlande', 'Dubaï, Émirats Arabes Unis',
  'Londres, Royaume-Uni', 'Buenos Aires, Argentine', 'Copenhague, Danemark', 'Amsterdam, Pays-Bas', 'Lisbonne, Portugal',
];

export const DESCRIPTIONS: string[] = [
  'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.',
  "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
  'Une expérience unique entre culture ancestrale et modernité vibrante.',
  'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.',
  'Entre traditions et innovations, cette destination vous réserve bien des surprises.',
];

export const PRIX: number[] = [
  799, 899, 999, 1099, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2699,
];
