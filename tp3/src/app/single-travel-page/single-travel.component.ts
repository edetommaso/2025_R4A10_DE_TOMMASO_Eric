import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TravelsService } from '../travels.service';
import { Travel } from '../travels/single-card-travel/single-card-travel.component';
import { BoutonSupprimerComponent } from '../bouton-supprimer/bouton-supprimer.component';

@Component({
  selector: 'app-single-travel',
  standalone: true,
  imports: [BoutonSupprimerComponent],
  templateUrl: './single-travel.component.html',
  styleUrl: './single-travel.component.scss'
})
export class SingleTravelPageComponent {
  travel?: Travel;
  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private travelsService: TravelsService
  ) {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.travel = this.travelsService.getTravelById(id);
      if (!this.travel) {
        
        this.router.navigate(['/404']);
      }
    }
  }
  
  
  supprimerTravel = (id: string) => {
    const travel = this.travelsService.getTravelById(id);
    if (travel && confirm("Supprimer le voyage vers " + travel.destination + " ?")) {
      this.travelsService.delTravel(id);
    }
  };
  
}
