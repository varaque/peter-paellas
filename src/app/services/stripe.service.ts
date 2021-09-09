import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private apiService: ApiService) { }

  PaymentIntent() {
    return this.apiService.conectar({
      accion: 'PaymentIntent',
      argumentos: ''
    })
  }
}
