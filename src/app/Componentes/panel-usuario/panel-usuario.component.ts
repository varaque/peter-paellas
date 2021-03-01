import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PaellasService } from 'src/app/services/paellas.service';
import {Paella} from '../../Interfaces/paella';



@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {


  API_ENDPOINT ='http://localhost:8000/api/paellas'; 
  user = localStorage.getItem('userData');
  userData = JSON.parse(this.user);
  /* user:User = {      antiguo data del usuario rollo modelo --23/2/21--

    id: null,
    name: null,
    email: null,
    email_verified: null,
    password: null,
    foto: "foto",
    ubicacion: null,
    calificacion: 0,
    baneado: false,
    tipo: 0,
  
  } */
  users: User[];
  //user = localStorage.getItem('userData'); coger data de localstorage
  paellas: Paella[];

  constructor(private usuariosService:UsuarioService , private paellaService:PaellasService , private usersService:UserService, private route: ActivatedRoute, private httpClient:HttpClient) { 
 
    //cogemos las paellas

    httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {
      this.paellas = data;
      console.log(data)
    })
 
 
 
  //aqui abajo la teoría es que cogíamos los datos del usuario, pero al final los cogeremos del localstorage y au asi que no hay que calentarse la cabeza, podría borrarse
 
      // this.id = this.route.snapshot.params['id'];
    this.usersService.get().subscribe((data: Usuario[]) => {
     // this.users = data;
 //this.user = this.users.find((n) => { return n.id == this.id})
    console.log('el user que tenemos' );
    console.log(this.userData);

    }) 
  } 
  

  ngOnInit(): void {
  }

}
