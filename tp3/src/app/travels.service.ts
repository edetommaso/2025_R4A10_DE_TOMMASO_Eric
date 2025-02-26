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

  generateTravel() {
    const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const prix = PRIX[Math.floor(Math.random() * PRIX.length)];
    const travel: Travel = {id: this.generateId(), destination: destination, description: description, prix: prix, representation: "/assets/sea.jpg" };
    this.addTravel(travel);
  }

}


export const DESTINATIONS: string[] = [
  'Bali, Indonésie',
  'Kyoto, Japon',
  'Santorin, Grèce',
  'Reykjavik, Islande',
  'Marrakech, Maroc',
  'Venise, Italie',
  'Rio de Janeiro, Brésil',
  'Phuket, Thaïlande',
  'New York, États-Unis',
  'Le Cap, Afrique du Sud',
  'Sydney, Australie',
  'Hanoï, Vietnam',
  'Toronto, Canada',
  'Bangkok, Thaïlande',
  'Dubaï, Émirats Arabes Unis',
  'Londres, Royaume-Uni',
  'Buenos Aires, Argentine',
  'Copenhague, Danemark',
  'Amsterdam, Pays-Bas',
  'Lisbonne, Portugal',
];

export const DESCRIPTIONS: string[] = [
  'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.',
  "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
  'Une expérience unique entre culture ancestrale et modernité vibrante.',
  'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.',
  'Entre traditions et innovations, cette destination vous réserve bien des surprises.',
  'Savourez la cuisine locale, explorez les lieux emblématiques et créez des souvenirs mémorables.',
  "Un havre de paix où la nature et l'architecture forment une harmonie parfaite.",
  'Vivez une immersion totale dans une ville aux mille contrastes et aux paysages enchanteurs.',
  "Profitez de plages paradisiaques, d'activités inoubliables et d'une culture envoûtante.",
  'Admirez les merveilles naturelles et architecturales qui font la renommée de cette destination.',
  "Laissez-vous porter par l'énergie de la ville et partez à la rencontre des habitants chaleureux.",
  "Un lieu idéal pour les amateurs d'aventure et de découverte, entre montagnes et océans.",
  'Baladez-vous à travers les ruelles animées et découvrez des trésors cachés à chaque coin de rue.',
  'Un mélange parfait entre traditions séculaires et modernité effervescente.',
  "Destination idéale pour les amoureux de la nature et les passionnés d'histoire.",
  'Découvrez une ville au charme intemporel et aux panoramas spectaculaires.',
  'Laissez-vous charmer par la diversité culturelle et la richesse historique de cette ville.',
  'Savourez des instants magiques dans une atmosphère unique et inspirante.',
  'Explorez un univers fascinant où chaque instant est une nouvelle découverte.',
  'Un voyage qui promet émerveillement, détente et découvertes inoubliables.',
];

export const PRIX: number[] = [
  799, 899, 999, 1099, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2699,
];

