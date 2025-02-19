import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  menus = [
    { label: "Home",route:"" },
    { label: "List",route:"list"},
    { label: "Generate",route:"generate" },
  ];
}
