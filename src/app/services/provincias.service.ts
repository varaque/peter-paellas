import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Provincia } from '../models/provincia.model';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private api: ApiService) { }


  actualizar(paella: any): Observable<any> {
    return this.api.conectar({ modelo: 'provincias', accion: 'Actualizar', argumentos: paella });
  }

  crear(paella: any): Observable<any> {
    return this.api.conectar({ modelo: 'provincias', accion: 'Registrar', argumentos: paella });
  }

  eliminar(id: number): Observable<any> {
    return this.api.conectar({ modelo: 'provincias', accion: 'Eliminar', argumentos: id, });
  }

  listar(): Observable<Provincia[]> {
    return this.api.conectar(
      { accion: 'Listar', modelo: 'provincias' }
    ).pipe(
      map(next => next.respuesta.map(alb => new Provincia(alb)))
    );
  }

  obtener(id: number): Observable<Provincia> {
    return this.api.conectar(
      { modelo: 'provincias', accion: 'ObtenerAlbaran', argumentos: id }
    ).pipe(
      map(next => {
        const alb = next.respuesta.datos_factura;
        alb.lineas = next.respuesta.lineas_albaran;

        return new Provincia(alb);
      })
    );
  }
}
