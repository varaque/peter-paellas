import { Component, OnInit } from '@angular/core';
import { PaellasService } from 'src/app/services/paellas.service';
import {Paella} from '../../Interfaces/paella';

@Component({
  selector: 'app-publica-paella',
  templateUrl: './publica-paella.component.html',
  styleUrls: ['./publica-paella.component.css']
})
export class PublicaPaellaComponent implements OnInit {

paella:Paella = {

  nombre: null,
  descripcion: null,
  cocinero: "cocineroquetoque",
  foto:"añadir el coger fotos",
  ubicacion: null,
  plazas: null,
  plazas_libres: null,
  precio:null,
  fecha: null,
  ver_hacer_paella: false,
  ninos: false,
  mascota: false,
  categoria: 2,
  usuario_id: 5, 


}

  constructor(private paellaService: PaellasService) {}

  ngOnInit(): void {
  }

  savePaella(){

    console.log(this.paella);

    this.paellaService.save(this.paella).subscribe((data) => {
      alert('¡Paella guardada!');
      console.log(data);
        }, (error) => {
      console.log("error en publica-paella.ts");
    })
  }

}
