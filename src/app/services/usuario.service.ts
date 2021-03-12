import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';

  constructor(private httpClient:HttpClient) {}

  
  save(usuario:Usuario){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT +'usuarios', usuario, {headers:headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT +'usuarios');
  }

  
  login(email: string, password: string) {
    const httpHeaders = new HttpHeaders();
    return this.httpClient.post(`${this.API_ENDPOINT}/login`, { email: email, password: password }, { headers: httpHeaders });
  }
}
