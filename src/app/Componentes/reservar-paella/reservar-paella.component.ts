import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Event } from '@angular/router';
import Swal from 'sweetalert2';

import * as moment from 'moment';

import { PaellasService } from 'src/app/services/paellas.service';
import { InfoPaellaReserva } from 'src/app/models/info-paella-reserva.model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservar-paella',
  templateUrl: './reservar-paella.component.html',
  styleUrls: ['./reservar-paella.component.css']
})
export class ReservarPaellaComponent implements OnInit {

  iframe: boolean = false;
  cajaRacionesAbierta: boolean = false;

  form: FormGroup;
  formSumbited: boolean = false;
  paella: InfoPaellaReserva;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private paellaService: PaellasService,
    private reservaService: ReservaService) {
    this.form = this.fb.group({
      usuario_nombre: ['Willian', [Validators.required]],
      usuario_telefono: ['123456789', [Validators.required]],
      usuario_email: ['wgalvez@circulorjo.es', [Validators.required, Validators.email]],
      reserva_raciones: [2, [Validators.required]],
      ver_hacer_paella: [false],
      paella_descripcion: [''],
      id_paella: [this.route.snapshot.params.id]
    });
    this.paella = new InfoPaellaReserva({});
  }

  async ngOnInit() {
    this.paella = await this.paellaService.obtenerDatosPaellaReserva(this.route.snapshot.params.id).toPromise();
  }

  reservarPaella(buttonModal:HTMLElement) {
    this.formSumbited = true;
    if (this.form.invalid) {
      return;
    }

    if (this.form.get('reserva_raciones').value == 0) {
      Swal.fire('Campo requerido', 'Escoja el número de raciones antes de reservar', 'info')
      return;
    }

    buttonModal.click()
  }

  toggleCajaRaciones() {
    this.cajaRacionesAbierta = this.cajaRacionesAbierta ? false : true;
  }

  selectRaciones(cantidad: number, cantidadStringSeleccionada: string, botonHtml: HTMLElement) {
    if (this.paella.paella_raciones < cantidad) {
      Swal.fire('Info', `Solo existen ${this.paella.paella_raciones} raciones disponibles`, 'info');
      this.cajaRacionesAbierta = false;
      return;
    }

    this.form.get('reserva_raciones').setValue(cantidad);
    botonHtml.innerHTML = cantidadStringSeleccionada;
    this.cajaRacionesAbierta = false;
  }

  stripeResponse(responseStripe: Event, modal: HTMLElement) {
    if (responseStripe) {
      modal.click();
      this.reservaService.reservarPaella(this.form.value).subscribe(res => {
        this.formSumbited = true;
        //this.form.reset();
        res.status ? Swal.fire('Muy bien', res.msg, 'success') : Swal.fire('Error', 'Ha ocurrido un error', 'error');
      });
    }
  }

}
