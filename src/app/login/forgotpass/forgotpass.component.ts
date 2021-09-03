import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

  form: FormGroup;
  formSubmitted: boolean = false;
  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario_email: ['', [Validators.required, Validators.email]]
    })
  }


  recordarPassword() {
    this.formSubmitted = true;
    if (this.form.invalid) {
      return
    }
    this.usuarioService.passwordOlvidado(this.form.value).subscribe((res: any) => {
      if (res.status) {
        Swal.fire('Revise su correo', res.msg, 'success')
      } else {
        Swal.fire('Error de permiso', res.msg, 'error')
      }
    });
  }
}