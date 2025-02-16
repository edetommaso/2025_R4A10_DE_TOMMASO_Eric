import { Component } from '@angular/core';
import { CarteComponent } from './carte/carte.component';

@Component({
  selector: 'app-what-customer-saying',
  standalone: true,
  imports: [CarteComponent],
  templateUrl: './what-customer-saying.component.html',
  styleUrl: './what-customer-saying.component.sass'
})
export class WhatCustomerSayingComponent {
  currentIndex = 0;
  
  feedbacks = [
    {
      nom: 'Edward Newgate',
      poste: 'Founder Circle',
      message: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely',
      image: 'assets/lego_1.jpg'
    },
    {
      nom: 'Sarah Johnson',
      poste: 'CEO TechCorp',
      message: 'This app revolutionized the way we interact with our customers. Highly recommended!',
      image: 'assets/lego_2.jpg'
    },
    {
      nom: 'John Doe',
      poste: 'Marketing Head',
      message: 'A seamless and efficient platform that makes life so much easier!',
      image: 'assets/lego_3.jpg'
    }
  ];
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
  }
}
