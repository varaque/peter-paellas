import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public guard:AuthGuardService) {
/*     console.log('cambiamos a false en header component');
this.guard.loggedIn =false; */
   /*  var loggedIn : Boolean;
    loggedIn = localStorage.getItem('atoken') !== null;
    console.log('loggedIn es desde el header: ' + loggedIn)
 */
var loggedIn : Boolean;                                     //vamos a chequear que se está logeado en el header, que lo cargo cada vez que me muevo de pagina, para ello creamos la 
    loggedIn = localStorage.getItem('atoken') !== null;     //variable loggedIn, que será true si hay un atoken que recordemos es como guardamos en locastorage el access_token y por
    console.log('loggedIn es desde el header: ' + loggedIn);//tanto si existe un atoken es que estamos logueados.
    console.log( localStorage.getItem('atoken') );
   }


    logout(){
      
      localStorage.removeItem('atoken');
      location.href = "https://peterpaellas.com/";


      //console.log('cambiamos a false en header component en el logout');
/*    this.guard.loggedIn == false; */


  } 

  ngOnInit(): void {
  }

}
