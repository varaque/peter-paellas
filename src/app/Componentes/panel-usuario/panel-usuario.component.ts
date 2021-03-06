import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { PaellasService } from 'src/app/services/paellas.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {


  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/users';  
  //API_ENDPOINT = 'http://localhost:8000/api/users';      //pruebas
  user = localStorage.getItem('userData');    //guardamos los datos del usuario al loguearse en login en localStorage, por lo que las recuperamos lo primero y las asignamos a user
  userData = JSON.parse(this.user);    
 
  users: User[];   //Cogemos usuarios y paellas para poder encontrar las paellas que tiene cada usuario y asi poder luego filtrarlas, ya que en el panel se muestran las paellas de cada usuario
 /*  paellas: Paella[]; */
  id:any;
  userD: User ={
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

  constructor(private usuariosService:UsuarioService , private paellaService:PaellasService , private usersService:UserService, private route: ActivatedRoute, private httpClient:HttpClient) { 
 
    //cogemos las paellas

   /*  httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {
      this.paellas = data;
      console.log(data)
    }) */
 
 
 
  //aqui abajo cogemos los datos del usuario, pero al final los podriamos coger del localstorage y au, no obstante asi cuando editemos info sale directamente
  //asi que no hay que calentarse la cabeza, pero es mejor esto porque coges directamente la info del usuario de la base
 
       this.id = this.userData.id;  
    this.usersService.get().subscribe((data: User[]) => {
     this.users = data;
     this.userD = this.users.find((n) => { return n.id == this.id})
      console.log('userD: ');   
     console.log(this.userD); 

    }) 
  } 
  
//PORQUE GASTAMOS userD en vez de userData? userData es el data local del tio en cuestion y userD viene de buscar en la bbdd asi que el problema vendria que cuando un usuario cambiara
//nombre por ejemplo en el userD ya esta cambiado porque lo coge de la bbdd directo, en cambio userdata lo cogemos cuando logueamos y es el que tenia originalmente, si quisieramos
//tocar cualquier cosa de esto la solucion pasaria antes por no coger nada de el login que otra cosa, lo cual es una tonteria, ya que te logueas coges info por velocidad, porque
//a no ser que quieras concretamente entrar cambiar nombre y publicar paella no deberia ser problematico y no ralentizará tampoco.
 
ngOnInit(): void {}

}
