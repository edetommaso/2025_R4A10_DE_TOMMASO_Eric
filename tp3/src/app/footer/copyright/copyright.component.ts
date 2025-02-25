import { Component } from '@angular/core';
import { info } from 'node:console';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  année: number = new Date().getFullYear();
  entreprise:string = "Boston";
  info: string = `© ${this.année} ${this.entreprise}. Tous droits réservés.`;
}
