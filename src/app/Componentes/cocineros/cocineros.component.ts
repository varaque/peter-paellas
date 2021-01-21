import { Component, OnInit } from '@angular/core';
import { COCINEROS } from '../cocinerosprueba';
import { Cocinero } from './cocinero';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.css']
})
export class CocinerosComponent implements OnInit {

  cocineros = COCINEROS;

  constructor() { }

  ngOnInit(): void {
  }

}
