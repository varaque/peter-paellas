import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Valoracion } from '../models/valoracion.model';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  constructor(private apiService: ApiService) { }

  insertar(valoracion: Valoracion): Observable<number> {
    return this.apiService.conectar({ modelo: 'valoraciones', accion: 'ValorarPaella', argumentos: valoracion })
      .pipe(
        map(res => res.respuesta)
      );
  }
}
