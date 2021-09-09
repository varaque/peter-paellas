import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  clientSecret: string = '';
  card: any;
  @Output('response') valorSalida: EventEmitter<boolean> = new EventEmitter();

  constructor(private stripeService: StripeService) { }

  ngOnInit(): void {
    this.stripeService.PaymentIntent().subscribe(res => {
      this.clientSecret = res.clientSecret
      var elements = this.stripeService.stripe.elements();

      var style = {
        base: {
          color: "#32325d",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          fontFamily: 'Arial, sans-serif',
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      };

      this.card = elements.create("card", { style: style });
      // Stripe injects an iframe into the DOM
      this.card.mount("#card-element");

      this.card.on("change", function (event) {
        // Disable the Pay button if there are no card details in the Element
        document.querySelector("button").disabled = event.empty;
        document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
      });
    });
  }


  // Calls stripe.confirmCardPayment
  // If the card requires authentication Stripe shows a pop-up modal to
  // prompt the user to enter authentication details without leaving your page.
  payWithCard(e: Event) {
    e.preventDefault();
    this.loading(true);
    this.stripeService.stripe
      .confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.card
        }
      })
      .then((result: any) => {
        if (result.error) {
          // Show error to your customer
          this.showError(result.error.message);
        } else {
          // The payment succeeded!
          this.orderComplete(result.paymentIntent.id);
        }
      });
  }

  /* ------- UI helpers ------- */

  // Shows a success message when the payment is complete
  orderComplete(paymentIntentId) {
    this.loading(false);
    /*  document
       .querySelector(".result-message a")
       .setAttribute(
         "href",
         "https://dashboard.stripe.com/test/payments/" + paymentIntentId
       ); */
    document.querySelector("button").disabled = true;
    Swal.fire('Muy bien', 'Tu reserva ha sido guardada satisfactoriamente', 'success');
    this.valorSalida.emit(true);
  }

  // Show the customer the error from Stripe if their card fails to charge
  showError(errorMsgText) {
    this.loading(false);
    var errorMsg = document.querySelector("#card-error");
    errorMsg.textContent = errorMsgText;
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 4000);
    this.valorSalida.emit(false);
  }

  // Show a spinner on payment submission
  loading(isLoading) {
    if (isLoading) {
      // Disable the button and show a spinner
      document.querySelector("button").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("button").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  }

}
