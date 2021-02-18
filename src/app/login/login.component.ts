import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,
    private http: HttpClient
  ) {

    this.form = fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        Validators.required
      ]
    });

  }

  ngOnInit(): void { }

  /**
   * Login the user based on the form values
   */
  login(id: number, token: string) {    //este es el submit del video de angular y laravel

    const formData = this.form.getRawValue();

   /* console.log(this.form.getRawValue());*/

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: '7Tx61ZtIbnuNVombIn0rmpYKDyC1OIvuYy0DmACb',
      scope: '*'

    }

this.http.post('http://localhost:8000/oauth/token', data).subscribe(
  result =>{
    var user = null;
    var atoken = null;
    var rtoken = null;
    console.log('success'); //
    console.log(result);    //
    localStorage.setItem('user',JSON.stringify(result));
    user = localStorage.getItem('user');
    user = JSON.parse(user);
    atoken = user.access_token;
    rtoken = user.refresh_token;
    console.log(user);

  },
  
  error=> {
    console.log('error');
    console.log(error);
  }
)
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
      
  }

  /**
   * Getter for the form controls
   */
  get controls() {
    return this.form.controls;
  }

}
