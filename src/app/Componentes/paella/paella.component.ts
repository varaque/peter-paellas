import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Paella } from '../../Interfaces/paella';
//import { PAELLAS } from '../paellasprueba';
import { PaellasService } from 'src/app/services/paellas.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-paella',
  templateUrl: './paella.component.html',
  styleUrls: ['./paella.component.css']
})
export class PaellaComponent implements OnInit {

  paella: Paella ={
    id: null,
    nombre: null,
    descripcion: null,
    cocinero: null,
    foto: null,
    ubicacion: null,
    provincia: null,
    plazas: null,
    plazas_libres: null,
    precio: null,
    telefono: null,
    fecha: null,
    ver_hacer_paella: null,
    ninos: null,
    mascota: null,
    categoria: null,
    usuario_id: null,

  };
  fecha;
  dia;
  mes;
  year;
  hora;
  id:any;

paellas: Paella[];


  constructor(private paellasService:PaellasService , private route: ActivatedRoute, private httpClient:HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    this.paellasService.get().subscribe((data: Paella[]) => {
      this.paellas = data;
 this.paella = this.paellas.find((m) => { return m.id == this.id})
    console.log(this.paella);

var miCadena = this.paella.fecha;
var divisiones = miCadena.split(" "); //Esto es para separar hora y fecha
               
this.fecha = divisiones [0];
this.fecha = this.fecha.split("-");
this.year = this.fecha[0];
this.mes = this.fecha[1];
this.dia = this.fecha[2];
this.hora = divisiones[1].substr(0,5);
/* console.log(this.hora);   */  
    })
  }



value: null;
ngOnInit(){}

  onSelect(paella: Paella): void {
    this.paella = paella;
  }

}



