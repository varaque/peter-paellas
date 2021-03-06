import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public guard:AuthGuardService, private router: Router) {

var loggedIn : Boolean;                                     //vamos a chequear que se está logeado en el header, que lo cargo cada vez que me muevo de pagina, para ello creamos la 
    loggedIn = localStorage.getItem('atoken') !== null;     //variable loggedIn, que será true si hay un atoken que recordemos es como guardamos en locastorage el access_token y por
    console.log('loggedIn es desde el header: ' + loggedIn);//tanto si existe un atoken es que estamos logueados.
    console.log( localStorage.getItem('atoken') );
   }

    logout(){
      
      localStorage.removeItem('atoken');
      localStorage.removeItem('userData');
      this.guard.loggedIn == false;
      
       location.href = "https://peterpaellas.com/"; 

  } 

  ngOnInit(): void {
  }

}
