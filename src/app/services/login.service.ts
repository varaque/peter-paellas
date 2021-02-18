import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_ENDPOINT = 'http://localhost:8000/api/';
headers:HttpHeaders
  constructor(private http:HttpClient) {


   /* this.headers=new HttpHeaders({headers:{"Accept":"application/json", "Authorization":""}}) */

  
  }  

   /* inicial(){
this.http.get<any>(environment.).pipe(
  map
)
    }*/

}
