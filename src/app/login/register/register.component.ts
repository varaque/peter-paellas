import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';
//import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      usuario_nombre: ['', Validators.required],
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_password: ['', Validators.required]
    })

  }

  registrarUsuario() {
    console.log(this.registerForm.value);
    this.usuarioService.insertar(this.registerForm.value).subscribe(res => {
      this.usuarioService.guardarCredenciales(res);
    });
  }
}
