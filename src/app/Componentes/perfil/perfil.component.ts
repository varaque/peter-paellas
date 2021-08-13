import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario';
import { User } from '../../Interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { PaellasService } from 'src/app/services/paellas.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  API_ENDPOINT = 'https://peterpaellas.com/lvel/public/api/paellas';
  //API_ENDPOINT = 'http://localhost:8000/api/paellas';      //pruebas

  currentRate;


  usuario: Usuario = {
    id_usuario: 0,
    usuario_nombre: '',
    usuario_email: '',
    email_verificado: false,
    usuario_password: '',
    usuario_telefono: '',
    usuario_foto: '',
    usuario_rol: '',
    usuario_estado: 0

  };

  user: User = {
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

  id: any;
  usuarios: Usuario[];
  users: User[];
  /* paellas: Paella[]; */
  numpaellas = 0;
  aux;
  userData;
  ya_puntuaste = false;
  logeado;

  constructor(private usuariosService: UsuarioService, private paellasService: PaellasService, private route: ActivatedRoute, private httpClient: HttpClient) {

    this.aux = localStorage.getItem('userData');    //esto es para comprobar si estás logueado, simplemente recibimos un dato desde el localStorage que nos habra traido el
    this.userData = JSON.parse(this.aux);           //header y si existe pues estas logeado
    if (this.userData == null) {
      this.logeado = false;
    } else { this.logeado = true }


    this.id = this.route.snapshot.params['id'];  
  }

  value: null;
  ngOnInit() { }

  rating(puntuacion)  //Esto se gasta para puntuar a alguien, le sumamos 1 a veces puntuado y su puntuacion dada, el ya puntuaste hay que ponerlo de otro modo, esto no es una solucion real
  {
    if (this.ya_puntuaste == false) {
      this.user.calificacion = this.user.calificacion + puntuacion;
      this.user.veces_puntuado++;
    } else { alert('¡Ya has puntuado a este usuario!') }
  }

  onSelect(user: User): void {
    this.user = user;
  }

  nolog() {                                    //esto simplemente es la funcion que llamamos cuando mostramos el ratio sin estar logueados, simplemente nos dice que nos logueemos
    alert('Debes estar logeado para puntuar')
  }


}