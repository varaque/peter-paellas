import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario';
import { User } from '../../Interfaces/user';
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
usuarios: Usuario[];
users: User[];
paellas: Paella[];
numpaellas = 0;
aux;
userData;
ya_puntuaste = false;
logeado;

  constructor(private usuariosService:UsuarioService , private paellasService:PaellasService, private usersService:UserService , private route: ActivatedRoute, private httpClient:HttpClient) { 


    this.aux = localStorage.getItem('userData');    //esto es para comprobar si estás logueado, simplemente recibimos un dato desde el localStorage que nos habra traido el
    this.userData = JSON.parse(this.aux);           //header y si existe pues estas logeado
    if(this.userData==null){
      this.logeado = false;
    }else{this.logeado =true}


    this.id = this.route.snapshot.params['id'];           //buscar el user...
    this.usersService.get().subscribe((data: User[]) => {
    this.users = data;

    this.user = this.users.find((n) => { return n.id == this.id})

    httpClient.get( this.API_ENDPOINT).subscribe((data2: Paella[]) => { //aqui vemos todas las paellas, de las cuales mostraremos solo las que tengan el mismo id del usuario
      this.paellas = data2;
      for (var i = 0; i < data.length; i++) {       //esto es para saber el numero de paellas de cada usuario y poder sacarlo por pantalla ademas si quiere ver sus paellas tambien sirve
        if(data2[i].usuario_id == this.user.id){this.numpaellas++;}  }      
      })

    if(this.user.veces_puntuado == 0){this.currentRate=this.user.calificacion;}else{this.currentRate = this.user.calificacion/this.user.veces_puntuado}}) 
    //si no lo has puntuado nunca que salga la calificacion que tenga (que si es un usuario real será 0) por no dividir entre 0 y que salga siempre 5 o si prefieres que salga 5 
    //de base pon solo la segunda parte y au
  }

  value: null;
  ngOnInit(){}

  rating(puntuacion)  //Esto se gasta para puntuar a alguien, le sumamos 1 a veces puntuado y su puntuacion dada, el ya puntuaste hay que ponerlo de otro modo, esto no es una solucion real
  {                               
      if(this.ya_puntuaste == false){
        this.user.calificacion = this.user.calificacion + puntuacion;
        this.user.veces_puntuado++;
         this.usersService.put(this.user).subscribe((data) => {  
           this.ya_puntuaste = true;
            }, (error) => {
            console.log("error en perfil.component.ts en la parte del userservice de actualizar puntuacion");})  } else{alert('¡Ya has puntuado a este usuario!')}
  }

  onSelect(user: User): void {
    this.user = user;
  }

nolog(){                                    //esto simplemente es la funcion que llamamos cuando mostramos el ratio sin estar logueados, simplemente nos dice que nos logueemos
  alert('Debes estar logeado para puntuar')
}
  
 
}