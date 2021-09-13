import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from './api/api.service';

declare var Stripe;
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  stripe = Stripe(environment.p_key)
  constructor(private apiService: ApiService) { }
  PaymentIntent() {
    return this.apiService.conectar({
      accion: 'PaymentIntent',
      argumentos: ''
    }).pipe(
      map(res => res.respuesta)
    )
  }
}
