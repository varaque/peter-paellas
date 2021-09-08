import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva.model';
import { PaellasService } from 'src/app/services/paellas.service';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  listaPaellas: Reserva[] = [];

  constructor(private reservaService: ReservaService,
    private paellaService: PaellasService) { }

  async ngOnInit() {
    this.listaPaellas = await this.reservaService.listarReservas().toPromise();
  }

  async cancelarPaella(id_paella: number) {
    this.paellaService.cancelarPaella(id_paella).subscribe(res => {
      if (res.status) {
        Swal.fire('Muy bien', res.msg, 'success');
      } else {
        Swal.fire('Error', res.msg, 'error');
      }
    });
  }

}
