import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TipoPaella } from '../models/tipos-paellas.model';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TipoPaellaService {

  constructor(private api: ApiService) { }


  actualizar(tipoPaella: any): Observable<any> {
    return this.api.conectar({ modelo: 'tipos_paellas', accion: 'Actualizar', argumentos: tipoPaella });
  }

  crear(tipoPaella: any): Observable<any> {
    return this.api.conectar({ modelo: 'tipos_paellas', accion: 'Registrar', argumentos: tipoPaella });
  }

  eliminar(id: number): Observable<any> {
    return this.api.conectar({ modelo: 'tipos_paellas', accion: 'Eliminar', argumentos: id, });
  }

  listar(): Observable<TipoPaella[]> {
    return this.api.conectar(
      { modelo: 'tipos_paellas', accion: 'Listar' }
    ).pipe(
      map(next => next.respuesta.map(alb => new TipoPaella(alb)))
    );
  }

  obtener(id: number): Observable<TipoPaella> {
    return this.api.conectar(
      { modelo: 'tipos_paellas', accion: 'ObtenerAlbaran', argumentos: id }
    ).pipe(
      map(next => {
        return new TipoPaella(next);
      })
    );
  }
}
