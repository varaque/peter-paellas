import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SuscripcionService } from 'src/app/services/suscripcion.service';
import Swal from 'sweetalert2';
import { SuscripcionNewsletter } from '../interfaces/suscripcion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(private suscripcionService: SuscripcionService, private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      newsletter_email: ['', [Validators.required, Validators.email]],
      aceptarNotificaciones: [false]
    })
  }

  saveSuscripcion() {
    this.formSubmitted = true;
    console.log(this.form.value)
    if (this.form.invalid) {
      return;
    }
    if (!this.form.get('aceptarNotificaciones').value) {
      Swal.fire('Info', 'Debe aceptar antes las los terminos','info');
      return
    }
    this.suscripcionService.newslater(this.form.value).subscribe(res => {
      console.log(res);
      res.respuesta.status ? Swal.fire('Info', res.respuesta.msg, 'success') : Swal.fire('Info', res.respuesta.msg, 'warning')
    });

  }

}
