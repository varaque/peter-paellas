import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Interfaces/user';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.css']
})
export class CocinerosComponent implements OnInit {
  /*  SI TE DA PROBLEMA AL CARGARLAS O ALGO PUEDE SER POR EL CORS QUE ES QUE NO ESTAS EN WHITE LIST PARA EL SERVER, EN PRINCIPIO EN EL BACK YA ESTA PUESTO PERO SI NO GASTA LA EXTENSION
   DE CHROME ALLOW CORS Y AU */

  API_ENDPOINT = 'http://peterpaellas.com/lvel/public/api/users';  //real
  //API_ENDPOINT = 'http://localhost:8000/api/users';      //pruebas

currentRate;
  users: User[];
  constructor(private userService: UserService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT).subscribe((data: User[]) => { 
      this.users = data;
      console.log(data);
    })
  }
  ngOnInit(): void { }

}
