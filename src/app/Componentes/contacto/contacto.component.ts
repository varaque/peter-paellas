import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  mensaje:Mensaje = {

    nombre: null,
    apellido: null,
    telefono: null,
    email: null,
    mensaje: null,

  
  }

  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {
  }

  saveMensaje(){

    
    console.log(this.mensaje);


  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.mensaje.email)) //chequeamos que el mail sea de verdad y esté gucci
  {


     this.mensajeService.save(this.mensaje).subscribe((data) => {

      alert('¡Mensaje enviado!');
      location.href ="http://localhost:4200/";
      console.log(data);
        }, (error) => {
      console.log("error en contacto.component.ts");
    })

  }
  else{
    alert('¡Este email no es valido!');
  }
  }






}
