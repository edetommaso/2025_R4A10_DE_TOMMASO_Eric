import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true, // 🔥 Ajoutez standalone: true
  imports: [ReactiveFormsModule], // 🔥 Importez ReactiveFormsModule
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() control!: FormControl;
  @Input() type: 'text' | 'textarea' = 'text';
}
