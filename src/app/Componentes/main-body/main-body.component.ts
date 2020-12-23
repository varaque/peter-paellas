import { Component, OnDestroy, OnInit } from '@angular/core';
import { PAELLAS } from '../paellasprueba';
import { Paella } from '../paella/paella'

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  paellas = PAELLAS;

  constructor() { }

  ngOnInit(): void {
  }

}
