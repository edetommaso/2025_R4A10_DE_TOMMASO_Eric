import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.sass'
})
export class Feedback {
  currentIndex = 0;

  feedbacks = [
    {
      nom: 'Edward Newgate',
      poste: 'Founder Circle',
      message: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely',
      image: 'assets/profile1.jpg'
    },
    {
      nom: 'Sarah Johnson',
      poste: 'CEO TechCorp',
      message: 'This app revolutionized the way we interact with our customers. Highly recommended!',
      image: 'assets/profile2.jpg'
    },
    {
      nom: 'John Doe',
      poste: 'Marketing Head',
      message: 'A seamless and efficient platform that makes life so much easier!',
      image: 'assets/profile3.jpg'
    }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
  }
}

type information= {
  nom:string;
  poste:string;
  message:string;
  image:string;
}