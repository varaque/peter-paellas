import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, throwIfEmpty } from 'rxjs/operators';

import { Usuario } from '../models/usuario.model';

import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  modeloUsuario: Usuario;
  constructor(private apiService: ApiService, private router: Router) { }

  insertar(usuario: Usuario) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'Registrar', argumentos: usuario });
  }

  obtener(): Observable<Usuario> {
    return this.apiService.conectar({
      modelo: 'usuarios', accion: 'ObtenerInfoNoSensible', argumentos: localStorage.getItem('id_usuario')
    }).pipe(
      map(res => new Usuario(res.respuesta.usuario)),
    );
  }

  get usuario() {
    return this.modeloUsuario ? this.modeloUsuario : new Usuario(JSON.parse(localStorage.getItem('usuario')));
  }

  actualizar(usuario: any) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'ActualizarInfoUsuario', argumentos: usuario });
  }

  logIn(credenciales: any) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'logIn', argumentos: credenciales });
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  guardarCredenciales(credenciales: any) {
    localStorage.setItem('usuario', JSON.stringify(credenciales.respuesta.usuario));
    localStorage.setItem('token', credenciales.respuesta.token);
    this.modeloUsuario = new Usuario(credenciales.respuesta.usuario);
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.apiService.conectar({ accion: 'validar_token', argumentos: token })
      .pipe(
        map(res => res.respuesta.token_status)
      );
  }

  cambiarFotoPerfil(imagen: any) {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'ActualizarFotoPerfil', argumentos: imagen })
      .pipe(
        tap(res => {
          this.modeloUsuario.usuario_foto = res.respuesta.foto;
          localStorage.setItem('usuario', JSON.stringify(this.modeloUsuario))
        })
      );
  }

}
