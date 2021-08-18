import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaellaDestacada } from '../models/paella-destacada.model';

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
    return this.api.conectar({ modelo: 'paellas', accion: 'Registrar', argumentos: paella });
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

  listarPaellasDestacadas(): Observable<PaellaDestacada[]> {
    return this.api.conectar(
      { modelo: 'paellas', accion: 'ListarPaellasDestacadas' }
    ).pipe(
      map(next => next.respuesta.map(alb => new PaellaDestacada(alb)))
    );
  }

  buscar(args: any): Observable<PaellaDestacada[]> {
    return this.api.conectar(
      { modelo: 'paellas', accion: 'Buscar', argumentos: args }
    ).pipe(
      map(next => next.respuesta.map(alb => new PaellaDestacada(alb)))
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
