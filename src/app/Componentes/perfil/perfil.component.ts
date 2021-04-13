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
  
 
  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/paellas'; 
  //API_ENDPOINT = 'http://localhost:8000/api/paellas';      //pruebas

  currentRate;

 
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
    veces_puntuado: 0,
    baneado: false,
    tipo: 0,

  };

id:any;
  //cocineros = COCINEROS;
  //selectedUsuario: Usuario;
usuarios: Usuario[];
users: User[];
paellas: Paella[];
numpaellas = 0;
aux;
userData;

  constructor(private usuariosService:UsuarioService , private paellasService:PaellasService, private usersService:UserService , private route: ActivatedRoute, private httpClient:HttpClient) { 


    this.aux = localStorage.getItem('userData');
    this.userData = JSON.parse(this.aux);
    console.log(this.userData);

    this.id = this.route.snapshot.params['id'];
    this.usersService.get().subscribe((data: User[]) => {
      this.users = data;
 this.user = this.users.find((n) => { return n.id == this.id})
    console.log(this.user);




    httpClient.get( this.API_ENDPOINT).subscribe((data2: Paella[]) => { //aqui vemos todas las paellas, de las cuales mostraremos solo las que tengan el mismo id del usuario
      this.paellas = data2;
      console.log(data)
      for (var i = 0; i < data.length; i++) {       //esto es para saber el numero de paellas de cada usuario y poder sacarlo por pantalla
        if(data2[i].usuario_id == this.user.id){
          this.numpaellas++;       }
        }

    })

/*     for (var i = 0; i < data.length; i++) {
      if(this.paellas[i].usuario_id == this.usuario.id){
        this.numpaellas++;
      }
     
     
   }
console.log ('numpaellas: ' + this.numpaellas); */
if(this.user)
       this.currentRate=this.user.calificacion;


    })
   
  }

  value: null;
  ngOnInit(){}


  rating(puntuacion){
    console.log('puntuacion: ');
    console.log(puntuacion);

  }

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