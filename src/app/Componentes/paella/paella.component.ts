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

      this.selectedPaella=PAELLAS[params.id]
      console.log(params.id)

    });
  }

  onSelect(paella: Paella): void {
    this.selectedPaella = paella;
  }
 
}
