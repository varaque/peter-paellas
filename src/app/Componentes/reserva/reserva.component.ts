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

  constructor(private reservaService: ReservaService, private paellasService: PaellasService) { 

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
    .render ( this.paypalElement.nativeElement );

  }
  saveReserva(){ //guardamos la reserva, habra que comprobar que hay plazas, que el email bien, etc
    
          //AQUI TENEMOS YA LA INFO PAELLA
          const fechahoy = moment().format('YYYY-MM-DD HH:mm:ss').toString(); 
    //const fechahoy = moment.tz(moment().toString());   //aqui y en las dos lineas de abajo estoy formateando la fecha para poder guardarla bien en la bbdd con fecha de hoy
    console.log('lafechahoy: ' + fechahoy);            //porque la bbdd la quiere en 'YYYY-MM-DD HH:mm:ss' pero el moment nos da algo como 'YYYY-MM-DDTHH:mm:ss+000000000'
    //this.reserva.fecha = fechahoy.tz(moment.tz.guess(true)).format('YYYY-MM-DD HH:mm:ss');
    this.reserva.fecha = fechahoy;
    
    console.log(this.reserva);

if( this.reserva.personas <= this.selectedPaella.plazas_libres){  //comprobar que hay plazas suficientes libres
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.reserva.email)) //chequeamos que el mail sea de verdad y esté gucci
  {
    this.reserva.paella_id = this.selectedPaella.id;
/*     this.selectedPaella.plazas_libres*/

this.selectedPaella.plazas_libres = (this.selectedPaella.plazas_libres - this.reserva.personas)
        console.log('el id paella, deberia estar ya con las plazas bien: ');
    console.log(this.selectedPaella); 





     this.reservaService.save(this.reserva).subscribe((data) => {     //esto para guardar la reserva
      
      alert('¡Reserva enviada!');
      console.log(data);


        this.paellasService.put(this.selectedPaella).subscribe((data) => {     
          //ESTO GUARDA LAS PLAZAS QUE HAYAS QUITADO DE LA PAELLA CON LA RESERVA 
//OJO ESTO PRESENTABA UN ERROR EN EL TELEFONO, QUE DECIA QUE NO PODIA SER NULL PORQUE AL CREAR LA BBDD NO LO PUSE ASI, FALLO MIO, LAS OPCIONES SON O VOLVER A HACER LA MIGRACION CON
//LAS TABLAS Y TAL, PERO COMO LO DE LOGUEARSE CONTOKENS Y TAL ES UN POCO TRICKY IGUAL LO JODE Y HAY QUE VOLVER A HACER EL LOGIN, LA OTRA OPCION MUCHISIMO MAS SENCILLA ES HACER LA
// COLUMNA NULLABLE, O CUANDO CREES LAS COLUMNAS O SI YA ESTAN CREADAS DESDE LA PROPIA BBDD, MUY SENCILLO, ES ACTIVAR UN TICK
      

       location.href ="https://peterpaellas.com/"; 
 
        }, (error) => {
      console.log("error en reserva.component.ts en la parte del paellaservice de actualizar paella");
    })


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



  checkReserva(){              //esta funcion es para comprobar la reserva y tal

    const fechahoy = moment().format('YYYY-MM-DD HH:mm:ss').toString(); 
    console.log('lafechahoy: ' + fechahoy);            
    this.reserva.fecha = fechahoy;

    this.reserva.paella_id = this.selectedPaella.id;
    console.log(this.reserva);

  }


}
