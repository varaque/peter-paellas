import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Paella } from '../../Interfaces/paella';
//import { PAELLAS } from '../paellasprueba';
import { PaellasService } from 'src/app/services/paellas.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-paella',
  templateUrl: './paella.component.html',
  styleUrls: ['./paella.component.css']
})
export class PaellaComponent implements OnInit {

  paella: Paella ={
    id: null,
    nombre: null,
    descripcion: null,
    cocinero: null,
    foto: null,
    ubicacion: null,
    plazas: null,
    plazas_libres: null,
    precio: null,
    fecha: null,
    ver_hacer_paella: null,
    ninos: null,
    mascota: null,
    categoria: null,
    usuario_id: null,

  };

  id:any;
  //paellas = PAELLAS;
 // selectedPaella: Paella;
paellas: Paella[];

  constructor(private paellasService:PaellasService , private route: ActivatedRoute, private httpClient:HttpClient) { 
    this.id = this.route.snapshot.params['id'];
    this.paellasService.get().subscribe((data: Paella[]) => {
      this.paellas = data;
 this.paella = this.paellas.find((m) => { return m.id == this.id})
    console.log(this.paella);

    })
   
  }

value: null;
ngOnInit(){}
 /* ngOnInit(){
   
    this.route.params.subscribe(params => {

      this.selectedPaella=PAELLAS[params.id]
      console.log(params.id)

    }
    );

    
  }*/

  onSelect(paella: Paella): void {
    this.paella = paella;
  }
 
}

