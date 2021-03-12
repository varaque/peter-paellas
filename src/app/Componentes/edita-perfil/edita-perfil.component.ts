import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.component.html',
  styleUrls: ['./edita-perfil.component.css']
})
export class EditaPerfilComponent implements OnInit {

  user = localStorage.getItem('userData');
  userData = JSON.parse(this.user);

  

  users:User = {

    name: this.userData.name,
    email: this.userData.email,
    email_verified_at: this.userData.email_verified_at,
    password: this.userData.password,
    foto: this.userData.foto,
    ubicacion: this.userData.ubicacion,
    calificacion: this.userData.calificacion,
    baneado: this.userData.baneado,
    tipo: this.userData.tipo,
  
  }

  contrasena2: null;
  form: FormGroup;

  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/users'; 

  constructor(private usuariosService:UsuarioService, private usersService:UserService, private route: ActivatedRoute, private fb:FormBuilder, private http: HttpClient) 
  { 
    console.log('El userData: ')
    console.log(this.userData)
    
    console.log('El user: ')
    console.log(this.user)


//creo que para cambiar algo concreto a un usuario se gasta la llamada patch, pero lo tengo que comprobar
   /*  httpClient.patch(this.API_ENDPOINT).subscribe((data: User[]) => {
      // this.user = data;
      console.log(data)
    }) */













  }

  saveEdits(){


    if(this.contrasena2==this.users.password){ 
      console.log('al menos la pass va')
  } //chequeamos que la contraseña puesta 2 veces esté gucci

    const formData = this.form.getRawValue;
console.log('aqui email que coge: ' + this.users.email)
console.log('aqui name que coge: ' + this.users.name)

//ESTOS IF SON PARA COMPROBAR SI ESTA EL CAMPO VACIO, QUE ENTONCES EL NAME EMAIL O LO QUE SEA SE PONDRÁ EL DEL USER, QUE ES EL QUE YA TENIAMOS Y NO SE GUARDARÁ EN EL THIS.USERS

if(this.users.name == ""){
/* console.log('ya esta pillando el if');
console.log( this.userData.name) */
this.users.name = this.userData.name;    //ESTA ES LA SOLUCION, APLICALA EL LUNES A TODOS LOS CAMPOS, creo que ya solo queda esto antes de maquetar, o poco mas 
    }

    if(this.users.email == ""){
      /* console.log('ya esta pillando el if');
      console.log( this.userData.name) */
      this.users.email = this.userData.email;   
          }


          if(this.users.ubicacion == ""){
            /* console.log('ya esta pillando el if');
            console.log( this.userData.name) */
            this.users.ubicacion = this.userData.ubicacion;  
                }

                /* if(this.users.password == ""){
                  this.users.password = this.userData.password;    
                      } */                                              //DE MOMENTO NO PONDRE LA OPCION DE CAMBIAR CONTRSEÑA


console.log('el this. users para comprobar cuando dejamos vacio: ')
console.log(this.users);

  /*   console.log('El formData del saveEdits: ')
    console.log(formData)

    console.log('El userData del saveEdits: ')
    console.log(this.userData)
    
    console.log('El user del saveEdits: ')
    console.log(this.user)

    console.log('El userS del saveEdits: ')
    console.log(this.users)
    
    console.log('queckeemos que no cambia el nombre si le ponemos vacio: ')
    console.log(this.users)
 */

  }








  ngOnInit(){

    this.form = this.fb.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      ubicacion: ['', Validators.required],


    })

  }

}
