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
    ubicacion: null,
    calificacion: 0,
    veces_puntuado: 0,
    baneado: false,
    tipo: 0,
  
  }
  mensaje:Mensaje = {
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 5,
    email: this.user.email,
    mensaje: 'mensaje de registro',
  }

  data = {

    newsletter: null,
  
  }

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
    this.http.post('http://localhost:8000/register', formData).subscribe(   //'http://localhost:8000/register'  'https://peterpaellas.com/lvel/public/register'
      result=>console.log(result),
      err=> console.log(err)
    );


  }


enviaMensaje(){                     //aqui habra que añadir el enviar mensaje


}





  //aqui hacemos el guardar con la tabla users, igual que usuarios arriba

  saveUsuario(){
    //<label><input type="checkbox" id="newsletter" value="1"> Quiero suscribirme al newsletter.</label><br>
    //Yes: <input type="checkbox" id="myCheck1" value="Yes, I'm a web developer">  

    //var yes = document.getElementById("myCheck1");  


/*else if (yes.checked == true){  
  var y = document.getElementById("myCheck1").value;  
  return document.getElementById("result").innerHTML = y;   
}   */
console.log('el data: ');
console.log(this.data);


    var token = null;

    /* console.log(this.usuario); */

    
if(this.contrasena2==this.usuario.contrasena){ //chequeamos que la contraseña puesta 2 veces esté gucci

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.usuario.email)) //chequeamos que el mail sea de verdad y esté gucci
  {
     this.usuarioService.save(this.usuario).subscribe((data) => {


      alert('¡Usuario creado!');
      localStorage.setItem('token', token);
      //this.router.navigateByUrl('/login');
      //location.href ="https://peterpaellas.com";  //real
      //location.href ="http://localhost:4200"; //pruebas
      console.log(data);
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


//aqui hacemos el guardar con la tabla users, igual que usuarios arriba
  saveUser(){

    
    /* console.log(this.user); */
if(this.contrasena2==this.user.password){ //chequeamos que la contraseña puesta 2 veces esté gucci

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) //chequeamos que el mail sea de verdad y esté gucci
  {

    this.MensajeService.sendRegistro(this.mensaje).subscribe((data) => {

console.log('el mensaje: ')
console.log(this.mensaje);

    }
    
    );



     this.userService.save(this.user).subscribe((data) => {




      
      alert('¡User creado!');
      this.router.navigateByUrl('/login');
      //location.href ="https://peterpaellas.com/panel-usuario";  //real
      //location.href ="http://localhost:4200/panel-usuario"; //pruebas
      console.log(data);
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
