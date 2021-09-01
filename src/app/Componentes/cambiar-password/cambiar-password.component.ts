import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {

  form: FormGroup;
  formulario_submitted: boolean = false;
  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      password_actual: ['', [Validators.required]],
      password_nuevo: ['', [Validators.required]],
      password_repetir: ['', [Validators.required]],
    });
  }


  cambiarPassword() {
    this.formulario_submitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.form.get('password_nuevo').value != this.form.get('password_repetir').value) {
      return;
    }
    this.usuarioService.cambiarPassword(this.form.value).pipe(
      map(res => res.respuesta),
      tap(res => {
        if (res.status) {
          Swal.fire('Correcto', 'Su contraseña ha sido cambiada', 'success');
          this.form.reset();
          this.formulario_submitted = false;
        } else {
          Swal.fire('Error', res.msg, 'error');
        }
      })
    ).toPromise();
  }
}
