import { Component, OnInit } from '@angular/core';
import { Suscripcion } from '../Interfaces/suscripcion';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  suscripcion: Suscripcion = {

    email: null,


  }

  constructor(private suscripcionService: SuscripcionService,private router:Router) { }

  ngOnInit(): void {
  }

  saveSuscripcion() {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.suscripcion.email)) //chequeamos que el mail sea de verdad y esté gucci
    {

      this.suscripcionService.save(this.suscripcion).subscribe((data) => {
        alert('¡Te has suscrito correctamente!');
        console.log(data);

        this.router.navigate(['/'])


      }, (error) => {
        console.log("error en footer.ts suscripcion");
      })
    }

    else {
      alert('¡Este email no es valido!');
    }

  }

}
