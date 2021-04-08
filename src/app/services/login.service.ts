import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/';
          //API_ENDPOINT = 'localhost:8000/api/';      //pruebas
  //API_ENDPOINT = 'http://localhost:8000/api/';      //pruebas
headers:HttpHeaders
  constructor(private http:HttpClient) {
    console.log('cambiamos a false en login service');
  var loggedIn = false;
  loggedIn = localStorage.getItem('atoken') !== null;

   /* this.headers=new HttpHeaders({headers:{"Accept":"application/json", "Authorization":""}}) */

  
  }  



   /* inicial(){
this.http.get<any>(environment.).pipe(
  map
)
    }*/

}
