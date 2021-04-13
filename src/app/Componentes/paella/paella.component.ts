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
  //paellas = PAELLAS;
//exportedPaella=[this.paella.id, this.paella.nombre, this.paella.descripcion, this.paella.cocinero, this.paella.foto, this.paella.ubicacion, this.paella.plazas, this.paella.plazas_libres, this.paella.precio, this.paella.fecha, this.paella.ver_hacer_paella, this.paella.ninos, this.paella.mascota, this.paella.categoria, this.paella.usuario_id];
//exportedPaella[];
paellas: Paella[];


  constructor(private paellasService:PaellasService , private route: ActivatedRoute, private httpClient:HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    this.paellasService.get().subscribe((data: Paella[]) => {
      this.paellas = data;
 this.paella = this.paellas.find((m) => { return m.id == this.id})
    console.log(this.paella);

var miCadena = this.paella.fecha;
var divisiones = miCadena.split(" "); //BOMBA, ya tenemos aqui separados hora y fecha
               
this.fecha = divisiones [0];
this.fecha = this.fecha.split("-");
this.year = this.fecha[0];
this.mes = this.fecha[1];
this.dia = this.fecha[2];
this.hora = divisiones[1].substr(0,5);
console.log('le atine: ')
console.log(this.hora);    
    })
  }



value: null;
ngOnInit(){

}
 /* ngOnInit(){
   
    this.route.params.subscribe(params => {

      this.selectedPaella=PAELLAS[params.id]
      console.log(params.id)

    }
    );

      var fechabuscada = moment.tz(this.paella.fecha, 'Europe/Madrid');                //convertimos al estandar de comparar lo que nos pongan en el filtro de la pagina en el html
  console.log(fechabuscada);

  this.paella.fecha = fechabuscada.tz(moment.tz.guess(true)).format('DD-MM');
  console.log('la fecha: ')
console.log(this.paella.fecha);


  }*/

  onSelect(paella: Paella): void {
    this.paella = paella;
  }

}



