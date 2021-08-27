import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

import { UsuarioService } from 'src/app/services/usuario.service';

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
      this.usuarioService.guardarCredenciales(res);
    });
  }


}
