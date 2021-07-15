import { ElementRef, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { Paella } from 'src/app/models/paella.model';
import { Provincia } from 'src/app/models/provincia.model';
import { TipoPaella } from 'src/app/models/tipos-paellas.model';

import { PaellasService } from 'src/app/services/paellas.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { TipoPaellaService } from 'src/app/services/tipo-paella.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @ViewChild('fechaRef') fechaRef: ElementRef;

  provincias: Provincia[] = [];
  paellas: Paella[] = [];
  filteredPaellas: Paella[] = [];
  tipoPaellas: TipoPaella[] = [];
  filter = { tipoPaella: undefined, ubicacion: undefined, fecha: undefined };
  calendarOpened: boolean = false;
  tipoPaellaselectOpened: boolean = false;
  provinciaSelectOpened: boolean = false;

  diaSemana: string
  mesNombre: string
  diaNum: string

  constructor(
    private paellaService: PaellasService,
    private provinciaService: ProvinciasService,
    private tipoPaellaService: TipoPaellaService,
    private renderer: Renderer2) {

    /* httpClient.get(this.API_ENDPOINT).subscribe((data: Paella[]) => {      //Cogemos paellas de la BBDD
      this.paellas = data;
      this.fechaPaellas = data;
      console.log('las paellas: ')
      console.log(data)

      this.paellas.forEach(p => {
        var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');
        p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD');
      });  //formateamos la fecha que nos viene de la BBDD, que nos la deje sin hora a peticion del diseño


      this.fechaPaellas.forEach(p => {                                      //hacemos dos arrays con los datos porque aqui podemos resetearlo cada vez que hagamos busqueda nueva
        var fechaedit = moment.tz(p.fecha, 'Europe/Madrid');                    //si no digamos que filtrariamos sobre el ya filtrado y claro no saldra nada, realmente esto no haria falta
        p.fecha = fechaedit.tz(moment.tz.guess(true)).format('YYYY-MM-DD');
      });  //para el funcionamiento propiamente, pero ayuda a que sea mas facil para el usuario


      this.paellas = this.paellas.filter(p =>                        //filtramos si la fecha es menor que la de hoy, en ese caso no aparecerá
        (p.fecha > fechahoy ? p.id > 0 : p.fecha == this.filterFecha));
    }) */

  }

  async ngOnInit() {
    try {
      this.filteredPaellas = this.paellas = await this.paellaService.listar().toPromise();
      this.provincias = await this.provinciaService.listar().toPromise();
      this.tipoPaellas = await this.tipoPaellaService.listar().toPromise();
      console.log(this.provincias)
    } catch (error) {
      console.log(error);
    }
    this.generarFechaCuadro(new Date)

  }

  buscar(): void {
    console.log(this.filter.fecha)
    /*  this.paellaService.buscar(this.filter).subscribe(res => {
       console.log(res)
     }) */
  }
  seleccionarFecha(e) {
    this.filter.fecha = moment(e).format('DD/MM/YYYY');
    this.renderer.setAttribute(this.fechaRef.nativeElement, "value", this.filter.fecha)
    this.generarFechaCuadro(new Date(e))
    this.toggleCalendar()
  }

  generarFechaCuadro(fecha: Date) {
    const fechaAux = moment(fecha);
    fechaAux.locale('es-ES');
    this.diaSemana = fechaAux.format('ddd');
    this.mesNombre = fechaAux.format('MMM');
    this.diaNum = fechaAux.format('DD');

  }

  toggleCalendar() {
    this.calendarOpened = this.calendarOpened ? false : true;
  }

  toggleSelect(numero: number) {
    if (numero == 1) {
      this.tipoPaellaselectOpened = this.tipoPaellaselectOpened ? false : true;
      this.provinciaSelectOpened = false;
    } else {
      this.provinciaSelectOpened = this.provinciaSelectOpened ? false : true;
      this.tipoPaellaselectOpened = false;
    }
  }

}
