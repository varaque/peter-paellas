import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Mensaje} from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
          //API_ENDPOINT = 'localhost:8000/api/';      //pruebas
          //API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas
  constructor(private httpClient:HttpClient) { }

  save(mensaje:Mensaje){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT +'mensajes', mensaje, {headers:headers});
  }

}
