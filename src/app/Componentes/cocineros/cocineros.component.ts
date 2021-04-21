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
