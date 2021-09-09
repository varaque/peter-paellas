import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { HeaderService } from '../services/header.service';
import { RutaAnteriorService } from '../services/ruta-anterior.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading: boolean;
  errors: boolean;
  errorMsg: string = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private rutaAnteriorService: RutaAnteriorService,
    private headerService: HeaderService) {
    this.form = this.fb.group({
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_password: ['', Validators.required],
      recordar_usuario: ['', [Validators.required]],
    });
  }

  login() {
    this.usuarioService.logIn(this.form.value).subscribe(res => {
      if (res.respuesta.status) {
        this.headerService.mostrarSeccionUsuario = true;
        this.usuarioService.guardarCredenciales(res);
        this.rutaAnteriorService.obtenerUrlAnterior() == '/primeros-pasos' ? this.router.navigateByUrl('/dashboard/publicar-paella') : this.router.navigateByUrl('/dashboard');
      } else {
        console.log(res.respuesta.msg)
        Swal.fire('Error', res.respuesta.msg, 'warning')
      }
    });
  }
}
