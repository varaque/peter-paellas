import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import * as moment from 'moment';

import { PaellasService } from 'src/app/services/paellas.service';
import { InfoPaellaReserva } from 'src/app/models/info-paella-reserva.model';
import { ReservaService } from 'src/app/services/reserva.service';

declare var paypal;
@Component({
  selector: 'app-reservar-paella',
  templateUrl: './reservar-paella.component.html',
  styleUrls: ['./reservar-paella.component.css']
})
export class ReservarPaellaComponent implements OnInit {
  @ViewChild('paypal') paypalElement: ElementRef;

  iframe: boolean = false;
  cajaRacionesAbierta: boolean = false;

  form: FormGroup;
  formSumbited: boolean = false;
  paella: InfoPaellaReserva;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private paellaService: PaellasService,
    private reservaService:ReservaService) {
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
    this.paypal();
  }

  reservarPaella() {
    this.formSumbited = true;
    if (this.form.invalid) {
      return;
    }

    if (this.form.get('reserva_raciones').value == 0) {
      Swal.fire('Campo requerido', 'Escoja el número de raciones antes de reservar', 'info')
      return;
    }

    this.reservaService.reservarPaella(this.form.value).subscribe(res => {
      this.formSumbited = true;
      //this.form.reset();
      res.status ? Swal.fire('Muy bien', res.msg, 'success') : Swal.fire('Error', 'Ha ocurrido un error', 'error');
    });
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

  paypal() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.paella.tipo_paella_nombre,
              amount: {
                currency_code: 'EUR',
                value: this.paella.paella_precio * this.form.get('reserva_raciones').value,
              }

            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        //this.saveReserva();
        console.log(order);

      },
      onError: err => {
        console.log(err);
      }
    })
      .render(this.paypalElement.nativeElement);
  }

}
