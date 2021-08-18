import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
    this.form = this.fb.group({
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_password: ['', Validators.required],
      recordar_usuario: ['', [Validators.required]],
    });
  }

  login() {
    this.usuarioService.logIn(this.form.value).subscribe(res => {
      if (res.respuesta.status) {
        this.usuarioService.guardarCredenciales(res);
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log(res.respuesta.msg)
      }
    });
  }
}
