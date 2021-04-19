import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { User } from 'src/app/interfaces/user';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';
//import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario:Usuario = {

    nombre: null,
    email: null,
    email_verified: false,
    contrasena: null,
    foto: "foto",
    ubicacion: null,
    calificacion: 0,
    baneado: false,
    tipo: 0,
  
  }
  user:User = {

    name: null,
    email: null,
    email_verified_at: null,
    password: null,
    foto: "/storage/foto.png",
    ubicacion: "Desconocida",
    calificacion: 0,
    veces_puntuado: 0,
    baneado: false,
    tipo: 0,
  
  }
  mensaje:Mensaje = {
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 10,
    email: this.user.email,
    mensaje: 'mensaje de registro',
  }
aux;
contrasena2: null;
form: FormGroup;

  constructor(private usuarioService: UsuarioService, private userService: UserService, private fb:FormBuilder, private http: HttpClient, private router:Router, private MensajeService:MensajeService) { }

  ngOnInit(){

/*     var checkedValue = document.querySelector('.messageCheckbox:checked').value; */


    this.form = this.fb.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      ubicacion: ['', Validators.required],


    })

  }

  submit(){

    const formData = this.form.getRawValue;
    this.http.post('https://peterpaellas.com/lvel/public/register', formData).subscribe(   //'http://localhost:8000/register'  'https://peterpaellas.com/lvel/public/register'
      result=>console.log(result),
      err=> console.log(err)
    );


  }


  //aqui hacemos el guardar con la tabla users, igual que usuarios arriba



//aqui hacemos el guardar con la tabla users, igual que usuarios arriba
  saveUser(){

    
    /* console.log(this.user); */
if(this.contrasena2==this.user.password){ //chequeamos que la contraseña puesta 2 veces esté gucci

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) //chequeamos que el mail sea de verdad y esté gucci
  {

     this.userService.save(this.user).subscribe((udata) => {
      this.aux=udata;
      this.mensaje.telefono = this.aux.id;   //verás esto es un poco trambolico, para buscar el user necesito recibir su id en el mensaje que le enviaré, pero no puedo poner a mensaje, de
                                              //tipo string un tipo int, asi que gasto el telefono para eso y au, total aqui el tlf da igual asi que lo uso como auxiliar para tener el id,
                                              //pero tampoco puedo simplemente meterlo rollo udata.id porque es un subscribe asi que gasto una variable auxiliar y ya está.

    this.MensajeService.sendRegistro(this.mensaje).subscribe((mdata) => {

console.log('el mensaje: ')
console.log(this.mensaje);

    });


      
      alert('¡User creado!');
      //this.router.navigateByUrl('/login');
      //location.href ="https://peterpaellas.com/panel-usuario";  //real
      //location.href ="http://localhost:4200/panel-usuario"; //pruebas
      console.log(udata);
        }, (error) => {
      console.log("error en register.ts");
    })

  }
  else{
    alert('¡Este email no es valido!');
  }

 
  }


 else{
    alert('¡Las contraseñas no coinciden!');
  }

}

}
