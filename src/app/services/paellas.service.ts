import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Paella} from '../interfaces/paella';

@Injectable({
  providedIn: 'root'
})
export class PaellasService {
API_ENDPOINT = 'http://localhost:8000/api/paellas';

  constructor(private httpClient:HttpClient) {}

  save(paella:Paella){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT, paella, {headers:headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT);
  }
  
}
