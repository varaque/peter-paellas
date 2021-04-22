import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variables
          //authUrl = 'localhost:8000/oauth/token';      //pruebas
          //apiUrl = 'localhost:8000/api';      //pruebas
  authUrl = 'https://peterpaellas.com/lvel/public/oauth/token';
  apiUrl = 'https://peterpaellas.com/lvel/public/api';
  options: any;
  /**
   * Constructor
   * @param http The http client object
   */
  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }


  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get(this.apiUrl + '/token/revoke', this.options);
  }
}