import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Cocinero } from '../models/cocinero.model';
import { Usuario } from '../models/usuario.model';

import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CocineroService {

  constructor(private apiService: ApiService) { }

  listar(): Observable<Cocinero[]> {
    return this.apiService.conectar({ modelo: 'usuarios', accion: 'ListarCocineros' }).pipe(
      map(next => next.respuesta.map((alb: any) => new Cocinero(alb)))
    );
  }
  obtener(id_usuario: number): Observable<Cocinero> {
    return this.apiService.conectar({
      modelo: 'usuarios',
      accion: 'ObtenerCocinero',
      argumentos: id_usuario
    }).pipe(
      map(next => new Cocinero(next.respuesta))
    );
  }
}