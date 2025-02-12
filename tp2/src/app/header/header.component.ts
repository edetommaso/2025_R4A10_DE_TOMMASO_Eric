import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent {
  title = "Trafalgar";
  
  menus = [
    { label: "Home", href: "#" },
    { label: "Find a doctor", href: "#" },
    { label: "Apps", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "About us", href: "#" }
  ];
}