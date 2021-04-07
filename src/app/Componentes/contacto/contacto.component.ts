  import { Component, OnInit } from '@angular/core';
  import { Mensaje } from 'src/app/interfaces/mensaje';
  import { MensajeService } from 'src/app/services/mensaje.service';
  import {User} from '../../interfaces/user';

  @Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
  })
  export class ContactoComponent implements OnInit {

    mensaje: Mensaje = {

      nombre: null,
      apellido: null,
      telefono: null,
      email: null,
      mensaje: null,
    }

    constructor(private mensajeService: MensajeService) { }

    ngOnInit(): void {
    }

    saveMensaje() {//esta funcion guardará el mensaje en la bbdd y dentro llamamos a this.sendMensaje() que es lo que enviará el mail y nos redirige a la pagina main

      //con validator esto no es necesario
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.mensaje.email)) //chequeamos que el mail sea de verdad y esté gucci
      {

        this.sendMensaje();

         this.mensajeService.sendContacto(this.mensaje).subscribe((data) => {                   //esto es lo que envia el correo a la bandeja de peter

          //location.href = "https://peterpaellas.com/";

        }, (error) => {
          console.log("error en contacto.component.ts send");
        }) 

      }
      else {
        alert('¡Este email no es valido!');
      }
    }

    sendMensaje(){

              this.mensajeService.save(this.mensaje).subscribe((data) => {
 
          alert('¡Mensaje enviado!');
          //location.href = "https://localhost:4200";
          //location.href = "https://peterpaellas.com/";
          console.log(data);

        }, (error) => {
          console.log("error en contacto.component.ts save");
        })

    }


  }