import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private URL: string = environment.apiUrl;

  constructor(protected http: HttpClient) { }

  conectar(body: any): Observable<any> {
    /*  const httpHeaders = new HttpHeaders({
       'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
     }); */
    return this.http.post(this.URL, body);
  }

}
