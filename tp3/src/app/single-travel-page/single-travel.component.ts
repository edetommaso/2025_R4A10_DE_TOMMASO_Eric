import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TravelsService } from '../travels.service';
import { Travel } from '../travels/single-card-travel/single-card-travel.component';

@Component({
  selector: 'app-single-travel',
  standalone: true,
  imports: [],
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
        // 🔥 Redirection vers 404 si le voyage n'existe pas
        this.router.navigate(['/404']);
      }
    }
  }
}
