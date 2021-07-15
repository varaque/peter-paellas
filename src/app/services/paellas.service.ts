import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Paella } from '../models/paella.model';
import { ApiService } from './api/api.service';
//import {}
@Injectable({
  providedIn: 'root'
})
export class PaellasService {
  constructor(private api: ApiService) { }


  actualizar(paella: any): Observable<any> {
    return this.api.conectar({ modelo: 'paellas', accion: 'Actualizar', argumentos: paella });
  }

  crear(paella: any): Observable<any> {
    return this.api.conectar({ modelo: 'paellas', accion: 'InsertarAlbaran', argumentos: paella });
  }

  eliminar(id: number): Observable<any> {
    return this.api.conectar({ modelo: 'paellas', accion: 'Eliminar', argumentos: id });
  }

  listar(): Observable<Paella[]> {
    return this.api.conectar(
      { modelo: 'paellas', accion: 'Listar' }
    ).pipe(
      map(next => next.respuesta.map(alb => new Paella(alb)))
    );
  }

  buscar(args: any): Observable<Paella[]> {
    return this.api.conectar(
      { modelo: 'paellas', accion: 'Buscar', argumentos: args }
    ).pipe(
      map(next => next.respuesta.map(alb => new Paella(alb)))
    );
  }

  obtener(id: number): Observable<Paella> {
    return this.api.conectar(
      { modelo: 'paellas', accion: 'Obtener', argumentos: id }
    ).pipe(
      map(next => {
        return new Paella(next);
      })
    );
  }
}
