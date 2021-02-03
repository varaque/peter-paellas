import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario';
//import { COCINEROS } from '../cocinerosprueba';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuario: Usuario ={
    id: null,
    nombre: null,
    email: null,
    email_verified: false,
    contrasena: null,
    foto: null,
    ubicacion: null,
    calificacion: 0,
    baneado: false,
    tipo: 0,

  };
id:any;
  //cocineros = COCINEROS;
  //selectedUsuario: Usuario;
usuarios: Usuario[];

  constructor(private usuariosService:UsuarioService , private route: ActivatedRoute, private httpClient:HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    this.usuariosService.get().subscribe((data: Usuario[]) => {
      this.usuarios = data;
 this.usuario = this.usuarios.find((n) => { return n.id == this.id})
    console.log(this.usuario);

    })
   
  }

  value: null;
  ngOnInit(){}

 /* ngOnInit(){
    
    this.route.params.subscribe(params => {

      this.selectedCocinero=COCINEROS[params.id]
      console.log(params.id)

    });
  }*/

  onSelect(usuario: Usuario): void {
    this.usuario = usuario;
  }
 
}
