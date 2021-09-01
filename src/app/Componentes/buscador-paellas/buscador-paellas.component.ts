import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';

import { PaellaDestacada } from 'src/app/models/paella-destacada.model';
import { Provincia } from 'src/app/models/provincia.model';
import { TipoPaella } from 'src/app/models/tipos-paellas.model';

import { PaellasService } from 'src/app/services/paellas.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { TipoPaellaService } from 'src/app/services/tipo-paella.service';
import { ValoracionService } from 'src/app/services/valoracion.service';

@Component({
  selector: 'app-buscador-paellas',
  templateUrl: './buscador-paellas.component.html',
  styleUrls: ['./buscador-paellas.component.css']
})

export class BuscadorPaellasComponent implements OnInit {

  tiposPaellas: TipoPaella[] = [];
  provincias: Provincia[] = [];
  listaPaellas: PaellaDestacada[] = [];

  calendarOpened: boolean = false;
  tipoPaellaselectOpened: boolean = false;
  provinciaSelectOpened: boolean = false;

  filter = { tipoPaella: 0, ubicacion: 0, fecha: moment().format('DD/MM/YYYY') };

  constructor(
    private tiposPaellaService: TipoPaellaService,
    private provinciaService: ProvinciasService,
    private paellaService: PaellasService,
    private valoracionService: ValoracionService) { }

  async ngOnInit() {
    this.tiposPaellas = await this.tiposPaellaService.listar().toPromise();
    this.provincias = await this.provinciaService.listar().toPromise();
    this.listaPaellas = await this.paellaService.listarPaellasDestacadas().toPromise();
  }

  toggleCalendar() {
    this.calendarOpened = this.calendarOpened ? false : true;
    this.provinciaSelectOpened = false;
    this.tipoPaellaselectOpened = false;
  }

  toggleSelect(numero: number) {
    if (numero == 1) {
      this.tipoPaellaselectOpened = this.tipoPaellaselectOpened ? false : true;
      this.provinciaSelectOpened = false;
    } else {
      this.provinciaSelectOpened = this.provinciaSelectOpened ? false : true;
      this.tipoPaellaselectOpened = false;
    }
    this.calendarOpened = false;
  }

  seleccionarTipoPaella(tipo: any, boton: HTMLElement) {
    this.filter.tipoPaella = tipo;
    boton.setAttribute('value', tipo.tipo_paella_nombre);
    this.tipoPaellaselectOpened = false;
  }

  seleccionarProvincia(provincia: any, boton: HTMLElement) {
    this.filter.ubicacion = provincia;
    boton.setAttribute('value', provincia.provincia_nombre);
    this.provinciaSelectOpened = false;
  }

  seleccionarFecha(e, boton: HTMLElement) {
    this.filter.fecha = moment(e).format('DD/MM/YYYY');
    boton.setAttribute('value', this.filter.fecha);
    this.toggleCalendar()
  }

  async buscar() {
    this.listaPaellas = await this.paellaService.buscar(this.filter).toPromise()
  }

  async valorarPaella(paella: PaellaDestacada, valoracion: number) {
    paella.valoracion = valoracion;
    paella.numero_votos += 1;
    Swal.fire('Gracias', 'Tu voto ha sido guardado', 'success');
    await this.valoracionService.insertar({
      id_valoracion: 6,
      valoracion: valoracion,
      id_usuario: 6,
      id_paella: paella.id_paella,
    }).toPromise();
  }
}
