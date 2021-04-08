import { Component, OnDestroy, OnInit } from '@angular/core';
//import { PAELLAS } from '../paellasprueba';
//import { Paella } from '../paella/paella'
import { PaellasService } from 'src/app/services/paellas.service';
import { HttpClient } from '@angular/common/http';
import {Paella} from '../../Interfaces/paella';
import {DomSanitizer} from '@angular/platform-browser';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

 // paellas = PAELLAS;
filterPaella=""
filterCocinero=""
filterUbicacion=""
filterCategoria=""
filterFecha=""
  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/paellas'; // SI TE DA PROBLEMA AL CARGARLAS O ALGO PUEDE SER POR EL CORS ESE QUE PONE EN EL F12, QUE ES QUENO ESTAS EN WHITE LIST PARA EL SERVER, GASTA LA EXTENSION DE CHROME ALLOW CORS Y AU
  //API_ENDPOINT = 'http://localhost:8000/api/paellas';      //pruebas
  paellas: Paella[];
  fechaPaellas: Paella[];

  filter = { filterFecha: undefined};


  constructor(private paellaService: PaellasService, private httpClient: HttpClient, private sanitizer:DomSanitizer) { 

    httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {
      this.paellas = data;
      this.fechaPaellas = data;
      console.log('las paellas: ')
      console.log(data)


     this.paellas.forEach(p => {
  var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');
  p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD'); //esto nos hace que el array que le pongamos antes del punto del foreach lo va a revisar uno a uno, la p es el nombre
});                                                                //que le damos al elemento ( en este caso p es cada paella, porque las vamos revisando una a una y cada p es una paella),
                                                                  // podria ser cualquier nombre, con el moment lo ponemos formateado como queremos sin hora para comparar con la fecha.

      this.fechaPaellas.forEach(p => {                                      //hacemos dos arrays con los datos porque aqui podemos resetearlo cada vez que hagamos busqueda nueva
    var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');                    //si no digamos que filtrariamos sobre el ya filtrado y claro no saldra nada 
    p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD'); 
    });   

  })

  }
  
  
  sanitize(url:string){
    
    return this.sanitizer.bypassSecurityTrustUrl(url);

}

buscar(){
  console.log('la fecha que le entra: ')
  console.log(this.filterFecha)
  if(this.filterFecha!= ''){
  var fechabuscada = moment.tz(this.filterFecha, 'Europe/Madrid');                //convertimos al estandar de comparar lo que nos pongan en el filtro de la pagina en el html
  this.filterFecha = fechabuscada.tz(moment.tz.guess(true)).format('YYYY-MM-DD'); // formateamos a como buscamos
  this.filterFecha = this.filterFecha.toString()}                                  //esto realmente no se si haria falta, pero bueno yo lo dejo
  console.log('el filterfecha despues del moment: ') 
  console.log(this.filterFecha);
  console.log(this.paellas) 
this.paellas = this.fechaPaellas;                                 //reseteamos el array antes de filtrar, asi podremos filtrar sobre todas una segunda vez y no sobre las ya filtradas
  this.paellas = this.paellas.filter( p =>                        //filtramos si vemos que es igual la fecha de cada paella a la que hemos metido en el html
   
    (this.filterCategoria == '' ? p.id > 0 : p.categoria == parseInt(this.filterCategoria))&&
    /* (this.filterUbicacion == '' ? p.id > 0 : p.ubicacion.toLowerCase() == this.filterUbicacion.toLowerCase())&& */
    (this.filterFecha == '' ? p.id > 0 : p.fecha == this.filterFecha)
    /* p.fecha == this.filterFecha */
  );  

  window.scroll(0, 850)
}

/* var fecha = this.filterFecha;
this.filterFecha= fecha.tz(moment.tz.guess(true)).format('YYYY-MM-DD' )
console.log('a ver que pilla el coso este: ')
console.log(this.filterFecha) */

  ngOnInit(): void {
  }

}
