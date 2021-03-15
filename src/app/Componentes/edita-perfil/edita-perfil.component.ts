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

    console.log('El users: ')
console.log(this.users);


//el userdata son los datos de quien se logueó, user es el usuario de la bbdd, users es lo que estamos poniendo, asi que habra que ponerle al user lo que cojamos en el users y
// guardar el user en la bbdd


  }

  saveEdits(){


   /*  if(this.contrasena2==this.users.password){ 
      console.log('al menos la pass va')
  } */ //chequeamos que la contraseña puesta 2 veces esté gucci

/*     const formData = this.form.getRawValue; */
console.log('aqui email que coge: ' + this.users.email)
console.log('aqui name que coge: ' + this.users.name)

//ESTOS IF SON PARA COMPROBAR SI ESTA EL CAMPO VACIO, QUE ENTONCES EL NAME EMAIL O LO QUE SEA SE PONDRÁ EL DEL USER, QUE ES EL QUE YA TENIAMOS Y NO SE GUARDARÁ EN EL THIS.USERS

/* if(this.users.name == ""){

this.users.name = this.userData.name;    //ESTA ES LA SOLUCION, APLICALA EL LUNES A TODOS LOS CAMPOS, creo que ya solo queda esto antes de maquetar, o poco mas 
    } */

  /*   if(this.users.email == ""){

      this.users.email = this.userData.email;   
          } */


  /*         if(this.users.ubicacion == ""){

            this.users.ubicacion = this.userData.ubicacion;  
                } */


                


console.log('el this. users para comprobar cuando dejamos vacio: ')
console.log(this.users);
/* this.usersService.put(this.user).subscribe((data) => {     


  // location.href ="https://peterpaellas.com/";  
  location.href ="http://localhost:4200/panel-usuario"; 
  
  }, (error) => {
  console.log("error en edita-perfil.component.ts en la parte del userservice de actualizar user");
  }) */
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
