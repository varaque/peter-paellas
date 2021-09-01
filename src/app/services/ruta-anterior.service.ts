import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RutaAnteriorService {
  private rutaAnterior: string;
  private rutaActual: string;
  constructor(private router: Router) {
    this.rutaActual = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.rutaAnterior = this.rutaActual;
        this.rutaActual = event.url;
      });
  }
  public obtenerUrlAnterior(): string {
    return this.rutaAnterior;
  }
}
