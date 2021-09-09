import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Reserva } from 'src/app/models/reserva.model';

import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  listaPaellas: Reserva[] = [];

  constructor(private reservaService: ReservaService,
    private usuarioServerice: UsuarioService) { }

  async ngOnInit() {
    this.listaPaellas = await this.reservaService.listarReservas().toPromise();
  }

  async cancelarPaella(reserva: Reserva) {
    const id_paella_reserva = this.usuarioServerice.usuario.usuario_rol == 2 ? reserva.id_paella : reserva.id_reserva;
    this.reservaService.cancelarReserva(id_paella_reserva).subscribe(res => {
      if (res.status) {
        Swal.fire('Muy bien', res.msg, 'success');
      } else {
        Swal.fire('Error', res.msg, 'error');
      }
    });
  }

}
