import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Suscripcion} from '../interfaces/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  //API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
  API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas
  constructor(private httpClient:HttpClient) { }

  save(suscripcion:Suscripcion){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'suscripcions', suscripcion, {headers:headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + 'suscripcions');
  }

}
