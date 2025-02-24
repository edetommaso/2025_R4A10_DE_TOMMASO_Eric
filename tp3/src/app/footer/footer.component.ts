import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CopyrightComponent } from './copyright/copyright.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent,CopyrightComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
