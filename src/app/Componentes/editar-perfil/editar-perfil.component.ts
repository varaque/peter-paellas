import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaellasService } from 'src/app/services/paellas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})

export class EditarPerfilComponent {

  constructor(
    private usuariosService: UsuarioService,
    private paellaService: PaellasService,
    private usersService: UsuarioService,
    private route: ActivatedRoute) {
  }

}
