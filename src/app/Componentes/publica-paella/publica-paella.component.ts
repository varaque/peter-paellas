import { Component, OnInit } from '@angular/core';
import { PaellasService } from 'src/app/services/paellas.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Municipio } from 'src/app/Interfaces/municipio';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Provincia } from 'src/app/models/provincia.model';
import { TipoPaella } from 'src/app/models/tipos-paellas.model';
import { TipoPaellaService } from 'src/app/services/tipo-paella.service';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publica-paella',
  templateUrl: './publica-paella.component.html',
  styleUrls: ['./publica-paella.component.css']
})

export class PublicaPaellaComponent implements OnInit {

  municipios: Municipio[];
  provincias: Provincia[];
  tipoPaellas: TipoPaella[];

  images: any[] = [];

  previousUrl$ = new BehaviorSubject<string>(null);
  currentUrl$ = new BehaviorSubject<string>(null);

  myForm: FormGroup;


  constructor(private paellaService: PaellasService,
    private provinciaService: ProvinciasService,
    private tipoPaellaService: TipoPaellaService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) {
    this.myForm = this.fb.group({
      paella_descripcion: new FormControl(''),
      paella_precio: new FormControl(5, [Validators.required]),
      paella_fecha_coccion: new FormControl((new Date), [Validators.required]),
      paella_raciones: new FormControl(1, [Validators.required]),
      paella_ver: new FormControl('-1', [Validators.required]),
      paella_mascotas: new FormControl('-1', [Validators.required]),
      id_cocinero: new FormControl(this.usuarioService.usuario.id_usuario),
      id_provincia: new FormControl(1, [Validators.required]),
      id_tipo_paella: new FormControl(1, [Validators.required]),
      paella_foto: new FormControl([]),
    });
  }

  async ngOnInit() {
    this.provincias = await this.provinciaService.listar().toPromise();
    this.tipoPaellas = await this.tipoPaellaService.listar().toPromise();

  }

  submit() {
    if (this.myForm.invalid) {
      return;
    }

    if (this.myForm.get('paella_ver').value == '-1') {
      console.log('ver paella mal');
      return;
    }
    if (this.myForm.get('paella_mascotas').value == '-1') {
      console.log('mascotasa mal');
      return;
    }

    this.myForm.get('paella_foto').setValue(this.images);

    this.paellaService.crear(this.myForm.value).subscribe(res => {
      if (res.status) {
        Swal.fire('Muy bien', res.msg, 'success');
      } else {
        Swal.fire('Error', res.msg, 'error');
      }
    });
  }


  agregarImagen(event: any, target: HTMLElement, order: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var img = reader.result;
      this.images.push({ name: file.name, size: file.size, type: file.type, order, data: img });
      target.style.backgroundImage = `url(${img})`;
      target.style.backgroundSize = 'cover';
    };
    console.log(this.images)
  }

  incrementar(nombre: string) {
    var valor = this.myForm.get(nombre).value;
    valor++;
    this.myForm.get(nombre).setValue(valor);
  }

  decrementar(nombre: string) {
    var valor = this.myForm.get(nombre).value;
    if (valor === 0) {
      valor == 0;
    } else {
      valor--;
    }
    this.myForm.get(nombre).setValue(valor);
  }

}
