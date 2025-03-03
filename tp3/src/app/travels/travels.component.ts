import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../travels.service';
import { GestionPageTravelsComponent } from './gestion-page-travels/gestion-page-travels.component';
import { SingleCardTravelComponent } from './single-card-travel/single-card-travel.component';

export interface Travel {
  id: string;
  destination: string;
  description: string;
  prix: number;
  representation: string;
}

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [GestionPageTravelsComponent, SingleCardTravelComponent],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent implements OnInit {
  
  travels: Travel[] = [];
  travelsPerPage = 20;
  currentPage = 1;
  
  constructor(private travelsService: TravelsService) {}
  
  ngOnInit() {
    this.loadTravels();
  }
  
  loadTravels() {
    this.travels = this.travelsService.getTravel();
  }
  
  get paginatedTravels(): Travel[] {
    const start = (this.currentPage - 1) * this.travelsPerPage;
    return this.travels.slice(start, start + this.travelsPerPage);
  }
  
  totalPages(): number {
    return Math.ceil(this.travels.length / this.travelsPerPage);
  }
  
  onPageChange(page: number) {
    this.currentPage = page;
  }  
  

  supprimerTravel(id: string) {
    if(confirm("Supprimer le voyage vers "+this.travelsService.getTravelById(id)?.destination + " ?")){
    this.travelsService.delTravel(id);
    this.loadTravels();
    }
  }
  
}
