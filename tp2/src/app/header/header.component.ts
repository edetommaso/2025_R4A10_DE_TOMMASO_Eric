import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ElementComponent } from './element/element.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent,NavbarComponent,ElementComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent {
  
}