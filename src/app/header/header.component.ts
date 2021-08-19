import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuDropdownDesplegado: boolean = false;
  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  toggleDropdownMenu() {
    this.menuDropdownDesplegado = this.menuDropdownDesplegado ? false : true;
  }

  redirect(ruta: string) {
    this.toggleDropdownMenu();
    this.router.navigateByUrl(`/${ruta}`);
  }

  logout() {
    this.toggleDropdownMenu();
    this.usuarioService.logout();
  }

  launchAction() {
    this.usuarioService.validarToken().subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/dashboard/publicar-paella')
      } else {
        this.router.navigateByUrl('/launch');
      }
    });
  }

  cerrarMenu(elemento: HTMLElement) {
    if (window.innerWidth < 992) elemento.click();
  }
}
