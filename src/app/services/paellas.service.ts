import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Paella} from '../interfaces/paella';
//import {}
@Injectable({
  providedIn: 'root'
})
export class PaellasService {

//API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas


  constructor(private httpClient:HttpClient) {}


  save(paella:Paella){
    
    var user = null;
    user = localStorage.getItem('user');
    user = JSON.parse(user);
    var atoken = user.access_token;
    var rtoken = user.refresh_token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${atoken}`});
    console.log(atoken);
    return this.httpClient.post(this.API_ENDPOINT + 'paellas', paella, {headers:headers});

  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + 'paellas');
  }
  put(paella){

    const headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'paellas/' + paella.id, paella, {headers:headers});

  }
}
