import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api/api.service';
import { Reserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  constructor(private apiService: ApiService) { }

  reservarPaella(args: any) {
    return this.apiService.conectar({
      modelo: 'reservas',
      accion: 'ReservarPaella',
      argumentos: args
    }).pipe(
      map(res => res.respuesta)
    )
  }

  listarReservas(): Observable<Reserva[]> {
    return this.apiService.conectar({
      modelo: 'reservas',
      accion: 'ObtenerReservas'
    }).pipe(
      map(res => res.respuesta.reservas.map(paella => new Reserva(paella)))
    )
  }

  cancelarReserva(id_reserva_paella: number) {
    return this.apiService.conectar({
      modelo: 'reservas',
      accion: 'CancelarReserva',
      argumentos: id_reserva_paella
    }).pipe(
      map(res => res.respuesta)
    )
  }

}
