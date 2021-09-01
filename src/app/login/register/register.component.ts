import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { UsuarioService } from 'src/app/services/usuario.service';
import { RutaAnteriorService } from 'src/app/services/ruta-anterior.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  ubicacion: any;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      usuario_nombre: ['', Validators.required],
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_password: ['', Validators.required],
      usuario_rol: [2],
    })
  }

  registrarUsuario() {
    this.usuarioService.insertar(this.registerForm.value).subscribe(res => {

      if (res.respuesta.status) {
        this.usuarioService.guardarCredenciales(res);
        this.router.navigateByUrl('/dashboard/activar-cuenta');
      } else {
        Swal.fire('Error', res.respuesta.msg, 'error');
      }
    });
  }


}
