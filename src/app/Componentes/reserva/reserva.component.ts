import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Paella } from '../../Interfaces/paella';
import { Mensaje } from '../../Interfaces/mensaje';
//import { PAELLAS } from '../paellasprueba';
import { ReservaService } from 'src/app/services/reserva.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { HttpClient } from '@angular/common/http';
import { PaellaComponent } from '../paella/paella.component';
import { Reserva } from '../../Interfaces/reserva';
import { getLocaleTimeFormat } from '@angular/common';
import { PaellasService } from 'src/app/services/paellas.service';
import * as moment from 'moment-timezone';
import {ThemePalette} from '@angular/material/core'; //para colorear el check

export interface Task {//para colorear el check
  color: ThemePalette;
}

declare var paypal;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement : ElementRef;
  @Input() selectedPaella: Paella;

  task: Task = {//para colorear el check
    color: 'primary',}

 
  reserva:Reserva = { //OJO ESTO ES UN PRODUCTO DE PRUEBA, HAY QUE HACER QUE COJA EL VALOR DE LA PAELLA DE LA BBDD 

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
  mensaje:Mensaje = {
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 5,
    email: this.reserva.email,
    mensaje: '',
  }



  title = 'angular-paypal-payment';

	iframe: boolean = false

  constructor(private reservaService: ReservaService, private paellasService: PaellasService, private MensajeService: MensajeService) { 

  }


  
  ngOnInit(){



    paypal.Buttons({createOrder: (data, actions) => {
      if( this.reserva.personas <= this.selectedPaella.plazas_libres){ 
      return actions.order.create({
        purchase_units: [
          {
            description: this.selectedPaella.nombre,
            amount     :{
              currency_code: 'EUR',
              value        : this.selectedPaella.precio * this.reserva.personas,
            }
           
          }
        ]
      })
    }
  else{alert('¡Lo sentimos, no hay tantas plazas libres!')} },
    onApprove: async (data, actions) => {
      const order = await actions.order.capture();
      this.saveReserva();
      console.log(order);
      
    },
    onError: err =>{
      console.log(err);
    }
    })
    .render ( this.paypalElement.nativeElement );  }



  saveReserva(){ //guardamos la reserva, habra que comprobar que hay plazas, que el email bien, etc

    this.mensaje.email = this.reserva.email;
    const fechahoy = moment().format('YYYY-MM-DD HH:mm:ss').toString(); //aqui y en las lineas de abajo estoy formateando la fecha para poder guardarla bien en la bbdd con fecha de hoy
 /*    console.log('lafechahoy: ' + fechahoy); */            //porque la bbdd la quiere en 'YYYY-MM-DD HH:mm:ss' pero el moment nos da algo como 'YYYY-MM-DDTHH:mm:ss+000000000'
    
 this.reserva.fecha = fechahoy;

/*     console.log(this.reserva); */

//Creamos el mensaje que enviaremos de la reserva, con nombre fecha etc al back y este enviara el correo al email en cuestion
    this.mensaje.mensaje = ' · Nombre: ' + this.reserva.nombre + '. · Email: ' + this.reserva.email +  '. · Telefono: ' + this.reserva.telefono +'. · Plazas reservadas: ' + this.reserva.personas + '. · Mensaje: ' + this.reserva.mensaje + '. -> La reserva se realizó para la siguiente paella: '+ '  · Nombre de la paella: '+ this.selectedPaella.nombre + '. · Hecha por: ' + this.selectedPaella.cocinero +'. · En: ' + this.selectedPaella.ubicacion + '. · Se pagó en total: ' + this.selectedPaella.precio*this.reserva.personas + '€' + '. · La reserva se realizó el dia y hora: ' + this.reserva.fecha;

if( this.reserva.personas <= this.selectedPaella.plazas_libres){  //comprobar que hay plazas suficientes libres
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.reserva.email)) //chequeamos que el mail este bien
  {
    this.reserva.paella_id = this.selectedPaella.id;
    this.selectedPaella.plazas_libres = (this.selectedPaella.plazas_libres - this.reserva.personas)

          //reservamos

     this.reservaService.save(this.reserva).subscribe((data) => {     
      
      alert('¡Reserva enviada, revisa tu mail para encontrar un correo de justificacion!');
      console.log(data);


      //ENVIAMOS MENSAJE DE RESERVA
    this.MensajeService.sendReserva(this.mensaje).subscribe((data) => {
      console.log('el mensaje: ')
      console.log(this.mensaje);  
          });

        this.paellasService.put(this.selectedPaella).subscribe((data) => {     
        }, (error) => {
      console.log("error en reserva.component.ts en la parte del paellaservice de actualizar paella");})


        }, (error) => {
      console.log("error en reserva.component.ts en la parte de reservaservice de guardar reserva");
    })

  }
  else{
    alert('¡Este email no es valido!'); //si el email no es gucci
  }  

}
  else{
    alert('¡Lo sentimos, no hay tantas plazas libres!');
  }

  }


  checkReserva(){              //esta funcion es para ver la reserva nada mas

    const fechahoy = moment().format('YYYY-MM-DD HH:mm:ss').toString(); 
    console.log('lafechahoy: ' + fechahoy);            
    this.reserva.fecha = fechahoy;

    this.reserva.paella_id = this.selectedPaella.id;
    console.log(this.reserva);

  }

}
