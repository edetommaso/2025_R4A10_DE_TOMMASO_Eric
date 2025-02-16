import { Component } from '@angular/core';
import { Feedback } from './feedback/feedback.component';

@Component({
  selector: 'app-what-customer-saying',
  standalone: true,
  imports: [Feedback],
  templateUrl: './what-customer-saying.component.html',
  styleUrl: './what-customer-saying.component.sass'
})
export class WhatCustomerSayingComponent {

}
