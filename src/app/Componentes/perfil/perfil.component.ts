import { Component, OnInit } from '@angular/core';
import { COCINEROS } from '../cocinerosprueba';
import { Cocinero } from '../cocineros/cocinero';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cocineros = COCINEROS;

  constructor() { }

  ngOnInit(): void {
  }

}
