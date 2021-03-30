import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { LoginService } from '../services/login.service';

//SI TE DA PROBLEMA DE CORS AL LOGEAR O LO QUE SEA, TIENES DOS OPCIONES. 1-SI ES SOLO PARA TESTEOS PUEDES PILLAR UNA EXTENSION DE CHROME LLAMADA ALLOW CORS O ALGO ASI, LA ACTIVAS 
//Y YA VA. LA OTRA OPCION QUE ES LA BUENA PARA QUE FUNCIONE REALMENTE ES UTILIZAR EL CORS MIDDLEWARE EN LARAVEL, BUSCA UN TUTORIAL POR AHI DE APLICARLO
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private guard:AuthGuardService,
    private loginService: LoginService,
    private http: HttpClient
  ) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ]
    });
  }

  ngOnInit(){
if(localStorage.getItem('atoken')!=null){           //para limpiar el atoken por si va lento y tarda en hacerlo, para que no se guarde el del usuario anterior
  localStorage.setItem('atoken', '');
  console.log('en el primer if del login component se ha limpiado atoken, hacemos console log');
  console.log(localStorage.getItem('atoken'));
}
    this.form = this.fb.group({

      email: '',
      password: ''

    })

   }

  /**
   * Login the user based on the form values
   */
  login() {    //este es el submit del video de angular y laravel
    

console.log('hemos entrado en el login() del login.component.ts')
    const formData = this.form.getRawValue();

   /* console.log(this.form.getRawValue());*/

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: '7Tx61ZtIbnuNVombIn0rmpYKDyC1OIvuYy0DmACb',
      scope: '*'
    };

    console.log('aqui el data que hemos puesto, osea email pass y tal: ')
    console.log(data);

      //.post('https://peterpaellas.com/lvel/public/oauth/token')
      //API_ENDPOINT = 'localhost:8000/oauth/token';      //pruebas
      //API_ENDPOINT = 'http://localhost:8000/oauth/token'; //si pruebas no va intenta esto

this.http.post('https://peterpaellas.com/lvel/public/oauth/token', data).subscribe( //AQUI RECIBIMOS EL TOKEN DE REFRESH Y DE AUTHENTICATION, EL CUAL VAMOS A ENVIAR EN UN HEADER PARA RECIBIR LA INFO DEL USER
  result =>{

    var user = null;
    var atoken = null;
    var rtoken = null;
    console.log('success'); //
    console.log('esto es el primer result del login.ts: ');  
    console.log(result);   //
    localStorage.setItem('user',JSON.stringify(result));
    user = localStorage.getItem('user');
    user = JSON.parse(user);
    localStorage.setItem('atoken',user.access_token); 
    console.log('acabamos de poner el atoken del localstorage, lo mostramos' + localStorage.getItem('atoken'))  //aqui guardamos en localstorage el access y refresh token
    localStorage.setItem('rtoken',user.access_token);
    atoken = user.access_token;
    rtoken = user.refresh_token; 
    console.log('esto es el user del login.ts: ');
    console.log(user);   //



//esto y lo de abajo antes estaba fuera del primer http


    var headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('atoken')}`});

    console.log('el atoken ' + localStorage.getItem('atoken'));
    console.log('el header '); 
    console.log(headers);








        //API_ENDPOINT = 'localhost:8000/api/users';      //pruebas
    this.http.get('https://peterpaellas.com/lvel/public/api/user', {headers: headers}).subscribe(

result => {
  var userData = result;
  var veamosaver = JSON.stringify(result);
  console.log('el userData veamos a ver: ' + veamosaver);
  localStorage.setItem('userData',JSON.stringify(result));

  this.guard.loggedIn=true;                    /*AQUI SE SUPONE QUE SE SETEARIA A TRUE EL LOGGEDIN DEL GUARD */
this.router.navigateByUrl('/panel-usuario');
  //location.href ="http://localhost:4200/panel-usuario"; pruebas
  //location.href ="https://peterpaellas.com/panel-usuario";  //real
},
error=> {
  console.log('error');
  console.log(error);
}

)

  },
  
  error=> {
    alert('¡Email o contraseña incorrectos!')
    console.log('error');
    console.log(error);
  }
)


var atoken = localStorage.getItem('atoken');

 




















   /* this.loading = true;
    this.errors = false;
    this.authService.login(this.controls.email.value, this.controls.password.value)
      .subscribe((res: any) => {
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        this.loading = false;
        // Navigate to home page
        this.router.navigate(['/']);
      }, (err: any) => {
        // This error can be internal or invalid credentials
        // You need to customize this based on the error.status code
        this.loading = false;
        this.errors = true;
      });*/
      



  } //hasta aqui el login


  /**
   * Getter for the form controls
   */
  get controls() {
    return this.form.controls;
  }

}
