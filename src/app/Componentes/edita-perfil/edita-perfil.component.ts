import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { userEdit } from 'src/app/interfaces/useredit';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.component.html',
  styleUrls: ['./edita-perfil.component.css']
})
export class EditaPerfilComponent implements OnInit {

  user = localStorage.getItem('userData');
  userData = JSON.parse(this.user);

  //aqui intentabamos guardar todo para meterlo con un patch y au pero claro necesita contraseña etc y es un pateo asi que probaremos con la version chiquita de abajo
  userL:User[];
  users:User = {

    id: this.userData.id,
    name: this.userData.name,
    email: this.userData.email,
    ubicacion: this.userData.ubicacion,
    email_verified_at: this.userData.email_verified_at,
    foto: this.userData.foto,
    calificacion: this.userData.calificacion,
    veces_puntuado: this.userData.veces_puntuado,
    baneado: this.userData.baneado,
    tipo: this.userData.tipo,
  
  }

  edit:userEdit = {
    id: this.userData.id,
    name: this.userData.name,
    email: this.userData.email,
    ubicacion: this.userData.ubicacion,

  }

  img = this.userData.foto;
  id:any;
  contrasena2: null;
  form: FormGroup;

  API_ENDPOINT ='https://peterpaellas.com/lvel/public/api/users'; //real
  //API_ENDPOINT = 'http://localhost:8000/api/users';      //pruebas 
    

  constructor(private usuariosService:UsuarioService, private usersService:UserService, private route: ActivatedRoute, private fb:FormBuilder, private http: HttpClient, private router: Router,) 
  {       
    
    /* console.log('El user, que es el coger del localStorage el userData: ')
    console.log(this.user)


    console.log('El userData, que es parsear el JSON del user: ')
    console.log(this.userData)
    


    console.log('El users, un objeto user que hemos creado: ')
console.log(this.users); */


//el userdata son los datos de quien se logueó, user es el usuario de la bbdd, users es lo que estamos poniendo, asi que habra que ponerle al user lo que cojamos en el users y
// guardar el user en la bbdd


//esto es para pillar al user por data

this.id = this.userData.id;  
this.usersService.get().subscribe((dataL: User[]) => {
 // this.users = data;
 this.userL = dataL;
 this.users = this.userL.find((n) => { return n.id == this.id})
      console.log('users: ');   
 console.log(this.users); 

}) 


  }

  handleUpload(event) {                                   //esto coge la foto del input y la convierte a formato base 64
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log('a ver lo de la tia esta del video: ');
        console.log(reader.result);
        this.img = reader.result;
    };
}

  saveEdits(){


   /*  if(this.contrasena2==this.users.password){ 
      console.log('al menos la pass va')
  } */ //chequeamos que la contraseña puesta 2 veces esté gucci

/*     const formData = this.form.getRawValue; */



/* console.log('aqui email que coge: ' + this.users.email)
console.log('aqui name que coge: ' + this.users.name)
console.log('aqui ubicacion que coge: ' + this.users.ubicacion)
console.log('aqui la foto que coge: ' + this.users.foto)
console.log('la this img: ' + this.img) */


//this.img == storage/foto.png
//this.users.foto ==
if(this.img != '/storage/foto.png' ){

this.users.foto = this.img;}

//ESTOS IF SON PARA COMPROBAR SI ESTA EL CAMPO VACIO, QUE ENTONCES EL NAME EMAIL O LO QUE SEA SE PONDRÁ EL DEL USER, QUE ES EL QUE YA TENIAMOS Y NO SE GUARDARÁ EN EL THIS.USERS


 if(this.users.name == ""){

this.users.name = this.userData.name;    //Esto es por si no metes nada en los campos de cambio que coja el que ya hay. 
    } 
    else{
      this.userData.name = this.users.name ;
    }


  if(this.users.email == ""){

this.users.email = this.userData.email;   
    } 
    else{
      this.userData.email = this.users.email ;
    }


  if(this.users.ubicacion == ""){

this.users.ubicacion = this.userData.ubicacion;   
    } 
    else{
      this.userData.ubicacion = this.users.ubicacion ;
    }



/* console.log('el this. users del saveedits(), lo que le pasamos al put: ')
console.log(this.users);

console.log('el this.userL dentro del saveedits()')
console.log(this.userL);  */

/* console.log('el edit que pretendemos guardar con el saveedits()')
console.log(this.userData); */

  this.usersService.put(this.users).subscribe((data) => {     
/*   console.log('lo de dentro del put: ')
console.log(data)
console.log( 'el this users: ')
console.log(this.users) */

   this.router.navigateByUrl('/panel-usuario');
  //location.href ="https://peterpaellas.com/panel-usuario";  //real
  // location.href ="http://localhost:4200/panel-usuario"; //pruebas
  
  }, (error) => {
  console.log("error en edita-perfil.component.ts en la parte del userservice de actualizar user");
  }) 

  }




  ngOnInit(){

    this.form = this.fb.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      ubicacion: ['', Validators.required],
      foto: ['', Validators.required],


    })

  }

}
