import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement : ElementRef;

  producto = {

    descripcion : 'producto en venta',
    precio      : 19.99,
    img         : 'imagen de tu producto',

  }
  title = 'angular-paypal-payment';

	iframe: boolean = false

  constructor() { }

  ngOnInit(){

    paypal.Buttons({createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: this.producto.descripcion,
            amount     :{
              currency_code: 'EUR',
              value        : this.producto.precio
            }
          }
        ]
      })
    },
    onApprove: async (data, actions) => {
      const order = await actions.order.capture();
      console.log(order);
      
    },
    onError: err =>{
      console.log(err);
    }
    })
    .render ( this.paypalElement.nativeElement );

  }

}
