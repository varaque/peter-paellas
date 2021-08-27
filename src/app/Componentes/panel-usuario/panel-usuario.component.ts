import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {
  usuario: Usuario
  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;

  }

  ngOnInit(): void {
    this.scrollTop();
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }

}
