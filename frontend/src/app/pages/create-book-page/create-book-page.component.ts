import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookApiService } from '../../services/book-api.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookFormComponent } from './book-form/book-form.component';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule,BookFormComponent],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  
  @Output() bookCreationEventEmitter = new EventEmitter<Book>();
  
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(35),]),
    author: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(50),]),
    description: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(255),]),
  });
  
  constructor(
    private bookService: BookApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  
  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value as Book).subscribe(() => {
        this.bookForm.reset();
        this.router.navigate(['/']);
      }
      );
      
    }
  }
  
  formControl(value:string): FormControl {
    return this.bookForm.get(value) as FormControl;
  }
  
}