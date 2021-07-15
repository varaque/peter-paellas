import { Component, OnInit } from '@angular/core';
import { PaellasService } from 'src/app/services/paellas.service';
import * as moment from 'moment-timezone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Municipio } from 'src/app/Interfaces/municipio';

@Component({
  selector: 'app-publica-paella',
  templateUrl: './publica-paella.component.html',
  styleUrls: ['./publica-paella.component.css']
})

export class PublicaPaellaComponent implements OnInit {

  img;
  user = localStorage.getItem('userData');
  userData = JSON.parse(this.user);
  imageSrc;

  //provincias: Provincia[];
  municipios: Municipio[];

  //esto es para usar el multifoto
  images = [];
  myForm = new FormGroup({
    //de aqui no es imprescindible pero yo quitaria name y file y simplemente dejaria filesource para guardar solo imagen y ya esta
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  constructor(private paellaService: PaellasService, private router: Router, private httpClient: HttpClient) {  //cargar provincias...
    /* httpClient.get('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json').subscribe((data: Provincia[]) => {

      data.sort(function (a, b) {
        if (a.nm > b.nm) { return 1 }
        if (a.nm < b.nm) { return -1 } return 0;
      });

      this.provincias = data.sort();
    }) */

    httpClient.get('https://raw.githubusercontent.com/IagoLast/pselect/master/data/municipios.json').subscribe((data: Municipio[]) => { //cargar municipios...

      data.sort(function (a, b) {
        if (a.nm > b.nm) { return 1 }
        if (a.nm < b.nm) { return -1 } return 0;
      });

      this.municipios = data.sort();
    })

  }

  ngOnInit(): void {
  }


  //pruebas de coger varias fotos, lo voy a dejar de la otra manera de momento pero es descomentar la parte del HTML y comentar lo de abajo

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.images.push(event.target.result);

          this.myForm.patchValue({
            fileSource: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  submit() {
    console.log(this.myForm.value);

  }

  //pruebas de coger varias fotos


  handleUpload(event) {                                   //esto coge la foto del input y la convierte a formato base 64
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.img = reader.result;
      alert('¡Imagen recibida correctamente!')


      this.imageSrc = this.img;           //metemos la foto en b64 en imageSrc y la decodifica con atob, que literalmente solo sirve para decodifcar b64 y mostramos imageSrc en el html
      this.imageSrc = atob(this.imageSrc);

    };
  }


}
