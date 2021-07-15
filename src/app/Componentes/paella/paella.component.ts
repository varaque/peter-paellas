import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaellasService } from 'src/app/services/paellas.service';
import { HttpClient } from '@angular/common/http';
import { Paella } from 'src/app/models/paella.model';

@Component({
  selector: 'app-paella',
  templateUrl: './paella.component.html',
  styleUrls: ['./paella.component.css']
})
export class PaellaComponent implements OnInit {

  paella: Paella;
  fecha;
  dia;
  mes;
  year;
  hora;
  id: any;

  paellas: Paella[];


  constructor(private paellasService: PaellasService, private route: ActivatedRoute, private httpClient: HttpClient) {

    //todo esto simplemente es tratar la fecha que nos vienen de la bbdd para que se quede en año/ mes / dia, aunque ahora que lo pienso seria mas facil hacer en el html 
    //{{Paella.fecha | date: "dd/MM/yyyy"}}, pero vamos que lo dejo por aqui por si acaso, si pones lo del html puedes borrar las lineas a partir de lo de var miCadena

    /* this.id = this.route.snapshot.params['id']; */
    /* this.paellasService.get().subscribe((data: Paella[]) => {
      this.paellas = data;
      this.paella = this.paellas.find((m) => { return m.id == this.id })
      console.log(this.paella);


      var miCadena = this.paella.fecha;
      var divisiones = miCadena.split(" "); //Esto es para separar hora y fecha

      this.fecha = divisiones[0];
      this.fecha = this.fecha.split("-");
      this.year = this.fecha[0];
      this.mes = this.fecha[1];
      this.dia = this.fecha[2];
      this.hora = divisiones[1].substr(0, 5);

    }) */
  }



  value: null;
  ngOnInit() { }

  /* onSelect(paella: Paella): void {
    this.paella = paella;
  } */

}
