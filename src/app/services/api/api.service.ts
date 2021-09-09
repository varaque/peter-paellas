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
    if (localStorage.getItem('token') != null) {
      const httpHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      return this.http.post(this.URL, body, { headers: httpHeaders });
    } else {
      return this.http.post(this.URL, body);
    }
  }

}
