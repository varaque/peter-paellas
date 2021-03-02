import { Component, OnInit } from '@angular/core';
import { Suscripcion } from '../Interfaces/suscripcion';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  suscripcion: Suscripcion = {

    email: null,


  }

  constructor(private suscripcionService: SuscripcionService) { }

  ngOnInit(): void {
  }

  saveSuscripcion() {
    /* esto con validators se arregla */
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.suscripcion.email)) //chequeamos que el mail sea de verdad y esté gucci
    {
      this.suscripcionService.save(this.suscripcion).subscribe((data) => {
        alert('¡Te has suscrito correctamente!');
        console.log(data);

        window.location.href = "http://localhost:4200";


      }, (error) => {
        console.log("error en footer.ts suscripcion");
      })
    }

    else {
      alert('¡Este email no es valido!');
    }

  }

}
