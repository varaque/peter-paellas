import { ElementRef, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { PaellaDestacada } from 'src/app/models/paella-destacada.model';

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
  paellas: PaellaDestacada[] = [];
  filteredPaellas: PaellaDestacada[] = [];

  tipoPaellas: TipoPaella[] = [];
  filter = { tipoPaella: [], ubicacion: [], fecha: moment().format('DD/MM/YYYY') };

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

  }

  async ngOnInit() {
    try {
      this.paellas = this.filteredPaellas = await this.paellaService.listarPaellasDestacadas().toPromise();
      this.provincias = await this.provinciaService.listar().toPromise();
      this.tipoPaellas = await this.tipoPaellaService.listar().toPromise();
    } catch (error) {
      console.log(error);
    }

    this.renderer.setAttribute(this.fechaRef.nativeElement, "value", this.filter.fecha);
    this.generarFechaCuadro(new Date);


  }

  buscar() {
    this.paellaService.buscar(this.filter).subscribe(res => {
      this.paellas = res;
    })
  }

  seleccionarFecha(e) {
    this.filter.fecha = moment(e).format('DD/MM/YYYY');
    this.renderer.setAttribute(this.fechaRef.nativeElement, "value", this.filter.fecha);
    this.generarFechaCuadro(new Date(e))
    this.toggleCalendar()
  }

  seleccionarTipoPaella(tipo: any) {
    const index = this.filter.tipoPaella.indexOf(tipo);
    index != -1 ? this.filter.tipoPaella.splice(index, 1) : this.filter.tipoPaella.push(tipo);
  }

  seleccionarpProvincia(provincia: any) {
    const index = this.filter.ubicacion.indexOf(provincia);
    index != -1 ? this.filter.ubicacion.splice(index, 1) : this.filter.ubicacion.push(provincia);
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
