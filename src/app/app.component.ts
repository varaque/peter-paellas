import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//tendre que mirar algo aqui que poner rollo loggedIn, que este activo cuando haya un token
constructor() {

 /* var loggedIn = false;
  loggedIn = localStorage.getItem('atoken') !== null;
  console.log('loggedIn es: ' + loggedIn)*/
}
/* logout(){
  localStorage.removeItem('atoken');
} */



  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}