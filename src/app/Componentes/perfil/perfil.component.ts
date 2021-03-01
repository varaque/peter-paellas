import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario';
import { User } from '../../Interfaces/user';
//import { COCINEROS } from '../cocinerosprueba';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { PaellasService } from 'src/app/services/paellas.service';
import {Paella} from '../../Interfaces/paella';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
 
  API_ENDPOINT ='http://localhost:8000/api/paellas'; 

 
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

  user: User ={
    id: null,
    name: null,
    email: null,
    email_verified_at: null,
    password: null,
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
users: User[];
paellas: Paella[];


  constructor(private usuariosService:UsuarioService , private paellasService:PaellasService, private usersService:UserService , private route: ActivatedRoute, private httpClient:HttpClient) { 


    this.id = this.route.snapshot.params['id'];
    this.usersService.get().subscribe((data: User[]) => {
      this.users = data;
 this.user = this.users.find((n) => { return n.id == this.id})
    console.log(this.user);




    httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {
      this.paellas = data;
      console.log(data)
    })





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

/*   onSelect(usuario: Usuario): void {
    this.usuario = usuario;
  } */

  onSelect(user: User): void {
    this.user = user;
  }
 
}
