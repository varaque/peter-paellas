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

/*filterPaella=""             Por si al final si queremos filtrar por cocinero o nombre dejo esto
filterCocinero=""*/
filterUbicacion=""
filterCategoria=""
filterFecha=""

  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/paellas';
  //API_ENDPOINT = 'http://localhost:8000/api/paellas';      //pruebas

  paellas: Paella[];
  fechaPaellas: Paella[];
  fechahoy;
  filter = { filterFecha: undefined};


  constructor(private paellaService: PaellasService, private httpClient: HttpClient, private sanitizer:DomSanitizer) { 

      var fechahoy = moment().format('YYYY-MM-DD').toString(); //Primero pillo la fecha de hoy para comparar las paellas con ella y ver si son actuales
      console.log('lafechahoy: ' + fechahoy);


    httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {      //Cogemos paellas de la BBDD
      this.paellas = data;
      this.fechaPaellas = data;
      console.log('las paellas: ')
      console.log(data)

      

     this.paellas.forEach(p => {
          var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');
           p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD'); });  //formateamos la fecha que nos viene de la BBDD, que nos la deje sin hora a peticion del diseño


      this.fechaPaellas.forEach(p => {                                      //hacemos dos arrays con los datos porque aqui podemos resetearlo cada vez que hagamos busqueda nueva
    var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');                    //si no digamos que filtrariamos sobre el ya filtrado y claro no saldra nada, realmente esto no haria falta
    p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD');});  //para el funcionamiento propiamente, pero ayuda a que sea mas facil para el usuario


    this.paellas = this.paellas.filter( p =>                        //filtramos si la fecha es menor que la de hoy, en ese caso no aparecerá
      (p.fecha > fechahoy ? p.id > 0 : p.fecha == this.filterFecha));  

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
    /* (this.filterUbicacion == '' ? p.id > 0 : p.ubicacion.toLowerCase() == this.filterUbicacion.toLowerCase())&&      Esto lo dejo comentado por si queremos volver a buscar ubicacion*/
    (this.filterFecha == '' ? p.id > 0 : p.fecha == this.filterFecha)

  );  

  window.scroll(0, 850)
}

  ngOnInit(): void {
  }

}
