import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cocinero } from 'src/app/models/cocinero.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CocineroService } from 'src/app/services/cocinero.service';

@Component({
  selector: 'app-perfil-cocinero',
  templateUrl: './perfil-cocinero.component.html',
  styleUrls: ['./perfil-cocinero.component.css']
})
export class PerfilCocineroComponent implements OnInit {
  
  cocinero: Usuario;

  constructor(
    private route: ActivatedRoute,
    private cocineroService: CocineroService) { }

  async ngOnInit() {
    this.cocinero = await this.cocineroService.obtener(this.route.snapshot.params.id).toPromise();
  }

}
