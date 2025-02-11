import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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