import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  constructor(private httpClient: HttpClient) { }


  insertar(usuario: Usuario) {
    return this.httpClient.post(apiUrl, { modelo: 'usuarios', accion: 'Registrar', argumentos: usuario }, { headers: this.headers });
  }

  get() {
    return this.httpClient.get(apiUrl + 'usuarios');
  }


  logIn(credenciales: any) {
    return this.httpClient.post(apiUrl, { modelo: 'usuarios', accion: 'logIn', argumentos: credenciales }, { headers: this.headers });
  }

  guardarCredenciales(credenciales: any) {
    localStorage.setItem('id_usuario', credenciales.respuesta.id_usuario);
    localStorage.setItem('usuario_email', credenciales.respuesta.usuario_email);
    localStorage.setItem('usuario_nombre', credenciales.respuesta.usuario_nombre);
    localStorage.setItem('token', credenciales.respuesta.token);

  }
}
