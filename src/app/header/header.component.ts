import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';

import { HeaderService } from '../services/header.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuDropdownDesplegado: boolean = false;
  menuMobileExpanded: boolean = false;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    public headerService: HeaderService) {
  }
  ngOnInit(): void {
  }
  toggleMenuMobile() {
    this.menuMobileExpanded = this.menuMobileExpanded ? false : true;
  }

  toggleDropdownMenu() {
    this.menuDropdownDesplegado = this.menuDropdownDesplegado ? false : true;
  }

  redirect(ruta: string) {
    this.toggleDropdownMenu();
    this.router.navigateByUrl(`${ruta}`);
  }

  logout() {
    this.headerService.mostrarSeccionUsuario = false;
    this.toggleDropdownMenu();
    this.usuarioService.logout();
  }

  launchAction() {
    this.usuarioService.validarToken().subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/dashboard/publicar-paella')
      } else {
        this.router.navigateByUrl('/primer-paso');
      }
    });
  }

  cerrarMenu(elemento: HTMLElement) {
    if (window.innerWidth < 992) elemento.click();
  }
}
