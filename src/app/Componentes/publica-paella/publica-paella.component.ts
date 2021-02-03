import { Component, OnInit } from '@angular/core';
import { PaellasService } from 'src/app/services/paellas.service';
import {Paella} from '../../Interfaces/paella';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-publica-paella',
  templateUrl: './publica-paella.component.html',
  styleUrls: ['./publica-paella.component.css']
})
export class PublicaPaellaComponent implements OnInit {

paella:Paella = {

  nombre: null,
  descripcion: null,
  cocinero: "cocineroquetoque",
  foto:"añadir el coger fotos",
  ubicacion: null,
  plazas: null,
  plazas_libres: null,
  precio:null,
  fecha: null,
  ver_hacer_paella: false,
  ninos: false,
  mascota: false,
  categoria: 2,
  usuario_id: 5, 


}

  constructor(private paellaService: PaellasService) {}

  ngOnInit(): void {
  }

  savePaella(){

  

    console.log(this.paella.fecha);

//tratamos la hora porque el datepicker de angular saca la hora en formato ISO y eso no le gusta a la bbdd, asi que vamos a hacer un poco de malabares para ver que dia es y darle
//categoría y que la bbdd guarde la fecha como toca 




const fechabbdd = moment.tz(this.paella.fecha, 'Europe/Madrid'); //decimos que de base tome que lo estas poniendo en madrid, esto habra que cambiarlo si gente internacional sube paellas
                                                                 //abajo la fecha la convertimos al formato de la bbdd que es el YYYY-MM-DD etc pero de base la fecha la devuelve en formato ISO, que como formato es mejor pero la bbdd no lo acepta tal y como esta.

this.paella.fecha = fechabbdd.tz(moment.tz.guess(true)).format('YYYY-MM-DD HH:mm:ss');  //guess es: ignora cache? : boolean.  el format es simplemente el formato en que queremos



console.log(this.paella.fecha);






/*this.paella.sesiones.forEach(sesion => {
const fechabbdd_sesion_inicio = moment.tz(sesion.inicio, 'Europe/Madrid');

sesion.inicio = fechabbdd_sesion_inicio.tz(moment.tz.guess(true)).format();

const fechabbdd_sesion_fin = moment.tz(sesion.fin, 'Europe/Madrid');

sesion.fin = fechabbdd_sesion_fin.tz(moment.tz.guess(true)).format();*/


    
    console.log(this.paella);

    this.paellaService.save(this.paella).subscribe((data) => {
      alert('¡Paella guardada!');
      console.log(data);

      window.location.href = "http://localhost:4200";


        }, (error) => {
      console.log("error en publica-paella.ts");
    })
  }

}
