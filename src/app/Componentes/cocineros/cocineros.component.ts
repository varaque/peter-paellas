import { Component, OnInit } from '@angular/core';
//import { COCINEROS } from '../cocinerosprueba';
import { Cocinero } from './cocinero';

import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../../Interfaces/user';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.css']
})
export class CocinerosComponent implements OnInit {

//  cocineros = COCINEROS;

  API_ENDPOINT ='http://localhost:8000/api/users'; // SI TE DA PROBLEMA AL CARGARLAS O ALGO PUEDE SER POR EL CORS ESE QUE PONE EN EL F12, QUE ES QUENO ESTAS EN WHITE LIST PARA EL SERVER, GASTA LA EXTENSION DE CHROME ALLOW CORS Y AU
  users: User[];

  constructor(private userService: UserService, private httpClient: HttpClient) { 

    httpClient.get( this.API_ENDPOINT).subscribe((data: User[]) => {
      this.users = data;
      console.log(data)
    })

  }

  ngOnInit(): void {
  }

}
