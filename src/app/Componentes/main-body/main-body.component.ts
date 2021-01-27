import { Component, OnDestroy, OnInit } from '@angular/core';
//import { PAELLAS } from '../paellasprueba';
//import { Paella } from '../paella/paella'
import { PaellasService } from 'src/app/services/paellas.service';
import { HttpClient } from '@angular/common/http';
import {Paella} from '../../Interfaces/paella';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

 // paellas = PAELLAS;

  API_ENDPOINT ='http://localhost:8000/api/paellas'; // SI TE DA PROBLEMA AL CARGARLAS O ALGO PUEDE SER POR EL CORS ESE QUE PONE EN EL F12, QUE ES QUENO ESTAS EN WHITE LIST PARA EL SERVER, GASTA LA EXTENSION DE CHROME ALLOW CORS Y AU
paellas: Paella[];
  constructor(private paellaService: PaellasService, private httpClient: HttpClient) { 

    httpClient.get( this.API_ENDPOINT).subscribe((data: Paella[]) => {
      this.paellas = data;
      console.log(data)
    })

  }

  ngOnInit(): void {
  }

}
