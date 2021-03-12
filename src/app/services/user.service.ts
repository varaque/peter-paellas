import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';

  constructor(private httpClient:HttpClient) {}

  
  save(user:User){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT +'users', user, {headers:headers});
  }

  get(){
    var user = null;
    user = localStorage.getItem('user');
    user = JSON.parse(user);
    var atoken = user.access_token;
    var rtoken = user.refresh_token;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${atoken}`});
    var usuario = this.httpClient.get(this.API_ENDPOINT +'users', {headers:headers});
    console.log(usuario);
    return usuario;
  }
  put(user){

    const headers = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'users/' + user.id, user, {headers:headers});

  }
  
  /*login(email: string, password: string, token: string) {

    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post(`${this.API_ENDPOINT}/login`, { email: email, password: password }, { headers: httpHeaders });
  }*/
}
