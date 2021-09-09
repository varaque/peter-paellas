import { Component, OnInit } from '@angular/core';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  constructor(private stripeService: StripeService) { }

  ngOnInit(): void {
    this.stripeService.PaymentIntent().toPromise();
  }

}
