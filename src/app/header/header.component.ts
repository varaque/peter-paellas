import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
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
}
