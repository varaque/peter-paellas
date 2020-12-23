import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paella } from './paella';
import { PAELLAS } from '../paellasprueba';

@Component({
  selector: 'app-paella',
  templateUrl: './paella.component.html',
  styleUrls: ['./paella.component.css']
})
export class PaellaComponent implements OnInit {

  paellas = PAELLAS;
  selectedPaella: Paella;

  constructor(private route: ActivatedRoute) { }

value: number;

  ngOnInit(){
    this.route.params.subscribe(params => {

      console.log(this.selectedPaella)
      this.value = params.id;
      console.log('despues del this.value ' + params.id)
      this.paellas.find(p => {
        console.log(p.id)
        return p.id === this.value
    })
      this.selectedPaella = this.paellas.find(p => p.id===this.value)
      console.log('despues del this.selected paella ' + params.id)
    });
  }

  onSelect(paella: Paella): void {
    this.selectedPaella = paella;
  }
 
}
