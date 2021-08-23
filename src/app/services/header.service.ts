import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _mostrarSeccionUsuario: boolean;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.validarToken().subscribe(res => this.mostrarSeccionUsuario = res)
  }
  public get mostrarSeccionUsuario(): boolean {
    return this._mostrarSeccionUsuario;
  }
  public set mostrarSeccionUsuario(value: boolean) {
    this._mostrarSeccionUsuario = value;
  }
}
