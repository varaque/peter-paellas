import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private apiService: ApiService, private router: Router) { }

  insertar(usuario: Usuario) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'Registrar', argumentos: usuario });
  }

  logIn(credenciales: any) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'logIn', argumentos: credenciales });
  }

  logout() {
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('usuario_email');
    localStorage.removeItem('usuario_nombre');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  guardarCredenciales(credenciales: any) {
    localStorage.setItem('id_usuario', credenciales.respuesta.id_usuario);
    localStorage.setItem('usuario_email', credenciales.respuesta.usuario_email);
    localStorage.setItem('usuario_nombre', credenciales.respuesta.usuario_nombre);
    localStorage.setItem('token', credenciales.respuesta.token);
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.apiService.conectar({ accion: 'validar_token', argumentos: token })
      .pipe(
        map(res => res.respuesta.token_status)
      );
  }

}
