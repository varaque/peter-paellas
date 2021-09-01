import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Mensaje} from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
  //API_ENDPOINT = 'https://localhost:8000/api/';      //pruebas
  //API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas sin api para enviar mail
  constructor(private httpClient:HttpClient) { }

  save(mensaje:Mensaje){
    const headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});
   /*  return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});      ESTO ES PARA GUARDARLO EN LA BBDD PERO SI TE ENVIA CORREO REALMENTE NO LO NECESITAS*/
  }

  sendContacto(mensaje:Mensaje){
    const headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpClient.post(this.API_ENDPOINT +'contactanosMailable', mensaje, {headers:headers});
   /*  return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});            ESTO ES PARA ENVIAR CORREO */
  }
  sendRegistro(mensaje:Mensaje){
    const headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpClient.post(this.API_ENDPOINT +'cuenta-creada', mensaje, {headers:headers});
   /*  return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});    ESTO ES PARA ENVIAR CORREO, pedimos un user porque solo queremos el email al que enviar*/
  }
  sendReserva(mensaje:Mensaje){
    const headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpClient.post(this.API_ENDPOINT +'paellaReservada', mensaje, {headers:headers});
   /*  return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});    ESTO ES PARA ENVIAR CORREO, pedimos un user porque solo queremos el email al que enviar*/
  }

}
