import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gestion-page-travels',
  standalone: true,
  templateUrl: './gestion-page-travels.component.html',
  styleUrl: './gestion-page-travels.component.scss'
})
export class GestionPageTravelsComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}

