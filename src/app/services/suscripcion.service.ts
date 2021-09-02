import { Injectable } from '@angular/core';

import { ApiService } from './api/api.service';
import { SuscripcionNewsletter } from '../interfaces/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  constructor(private apiService: ApiService) { }

  newslater(suscripcion: SuscripcionNewsletter) {
    return this.apiService.conectar({
      modelo: 'subscripciones_newsletter',
      accion: 'registrarNewsletter',
      argumentos: suscripcion
    });
  }
}
