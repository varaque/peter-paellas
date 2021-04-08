import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Reserva} from '../interfaces/reserva';
import {Paella} from '../interfaces/paella';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
  //API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas


  constructor(private httpClient:HttpClient) { }
  
  save(reserva:Reserva){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'reservas', reserva, {headers:headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + 'reservas');
  }
}
