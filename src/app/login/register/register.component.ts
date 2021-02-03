import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

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

contrasena2: null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(){

    
    console.log(this.usuario);
if(this.contrasena2==this.usuario.contrasena){ //chequeamos que la contraseña puesta 2 veces esté gucci

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.usuario.email)) //chequeamos que el mail sea de verdad y esté gucci
  {


     this.usuarioService.save(this.usuario).subscribe((data) => {

      alert('¡Usuario creado!');
      location.href ="http://localhost:4200/panel-usuario";
      console.log(data);
        }, (error) => {
      console.log("error en publica-usuario.ts");
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
