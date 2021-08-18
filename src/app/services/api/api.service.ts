import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private URL: string = environment.apiUrl;

  constructor(protected http: HttpClient) { }

  conectar(body: any): Observable<any> {
    return this.http.post(this.URL, body, { headers: this.httpHeaders });
  }

}
