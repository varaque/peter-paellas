import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Paella } from '../../Interfaces/paella';
//import { PAELLAS } from '../paellasprueba';
import { ReservaService } from 'src/app/services/reserva.service';
import { HttpClient } from '@angular/common/http';
import { PaellaComponent } from '../paella/paella.component';
import { Reserva } from '../../Interfaces/reserva';
import { getLocaleTimeFormat } from '@angular/common';
import { PaellasService } from 'src/app/services/paellas.service';
import * as moment from 'moment-timezone';

declare var paypal;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement : ElementRef;
  @Input() selectedPaella: Paella;

  reserva: Reserva = { //OJO ESTO ES UN PRODUCTO DE PRUEBA, HAY QUE HACER QUE COJA EL VALOR DE LA PAELLA DE LA BBDD 

    nombre : null,
    email      : null,
    telefono: null,
    personas: null,
    mascota: false,
    mensaje: null,
    ver_hacer_paella: false,
    ninos: false,
    fecha: '',
    paella_id: null,
    usuario_id: 0,


  }



  title = 'angular-paypal-payment';

	iframe: boolean = false

  constructor(private reservaService: ReservaService) { }

  
  ngOnInit(){





    paypal.Buttons({createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: this.selectedPaella.nombre,
            amount     :{
              currency_code: 'EUR',
              value        : this.selectedPaella.precio,
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
  saveReserva(){ //guardamos la reserva, habra que comprobar que hay plazas, que el email bien, etc
    
    const fechahoy = moment.tz(moment().toString());   //aqui y en las dos lineas de abajo estoy formateando la fecha para poder guardarla bien en la bbdd con fecha de hoy
    console.log('lafechahoy: ' + fechahoy);
    this.reserva.fecha = fechahoy.tz(moment.tz.guess(true)).format('YYYY-MM-DD HH:mm:ss');


    


    console.log(this.reserva);

if( this.reserva.personas <= this.selectedPaella.plazas_libres){  //comprobar que hay plazas suficientes libres
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.reserva.email)) //chequeamos que el mail sea de verdad y esté gucci
  {
    this.reserva.paella_id = this.selectedPaella.id;
    this.selectedPaella.plazas_libres

     this.reservaService.save(this.reserva).subscribe((data) => {     //esto para guardar la reserva
      this.selectedPaella.plazas_libres = (this.selectedPaella.plazas_libres - this.reserva.personas)
      alert('¡Reserva enviada!');
      location.href ="http://localhost:4200/";
      console.log(data);
        }, (error) => {
      console.log("error en reserva.component.ts");
    })

  }
  else{
    alert('¡Este email no es valido!'); //si el email no es gucci
  }  

}
  else{
    alert('¡Lo sentimos, hay tantas plazas libres!');
  }


  }


}
