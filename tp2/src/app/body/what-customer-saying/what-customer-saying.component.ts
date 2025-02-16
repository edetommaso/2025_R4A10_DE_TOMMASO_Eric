import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-what-customer-saying',
  standalone: true,
  imports: [FeedbackComponent],
  templateUrl: './what-customer-saying.component.html',
  styleUrl: './what-customer-saying.component.sass'
})
export class WhatCustomerSayingComponent {

}
