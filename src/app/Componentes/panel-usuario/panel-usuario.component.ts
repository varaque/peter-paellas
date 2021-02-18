import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  user:User = {

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
  
  }
  users: Users[];

  constructor(private usuariosService:UsuarioService , private usersService:UserService, private route: ActivatedRoute, private httpClient:HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    this.usersService.get().subscribe((data: Usuario[]) => {
      this.users = data;
 this.user = this.users.find((n) => { return n.id == this.id})
    console.log(this.user);

    })
  } 
  

  ngOnInit(): void {
  }

}
