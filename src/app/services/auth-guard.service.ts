import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  /**
   * Constructor
   * @param router The router object
   */


  loggedIn : boolean;


  constructor(
    private router: Router
  ) {
    //this.loggedIn= false;                                                     ESTO ES LO DEL LOGGEDIN
  this.loggedIn = localStorage.getItem('atoken') !== null;
    console.log('loggedIn es desde el header: ' + this.loggedIn) 

   }

  logout(){
    /* localStorage.removeItem('atoken'); */          
/*     this.loggedIn=false; */
  }
   
  /**
   * Can activate function
   * @param next The activated route snapshot object
   * @param state The router state snapshot object
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {/*         BUSCANDO DONDE MODIFICAR EL LOGGEDIN HE COMENTADO ESTO A VER SI VA BIEN

    if (
      localStorage.getItem('access_token')
    ) { return true; }
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
    return false;*/
  }
}