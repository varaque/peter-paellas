import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuDropdownDesplegado: boolean = false;
  constructor(public guard: AuthGuardService, private router: Router) {
  }

  toggleDropdownMenu() {
    this.menuDropdownDesplegado = this.menuDropdownDesplegado ? false : true;
  }

  redirect(ruta: string) {
    this.toggleDropdownMenu();
    this.router.navigateByUrl(`/${ruta}`);
  }

  logout() {

    localStorage.removeItem('atoken');
    localStorage.removeItem('userData');
    this.guard.loggedIn == false;

  }
}
