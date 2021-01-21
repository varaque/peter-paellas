import { ActivatedRoute } from '@angular/router';
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
  selectedCocinero: Cocinero;

  constructor(private route: ActivatedRoute) { }

value: number;

  ngOnInit(){
    
    this.route.params.subscribe(params => {

      this.selectedCocinero=COCINEROS[params.id]
      console.log(params.id)

    });
  }

  onSelect(cocinero: Cocinero): void {
    this.selectedCocinero = cocinero;
  }
 
}
