import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Provincia } from 'src/app/models/provincia.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})

export class EditarPerfilComponent implements OnInit {

  form: FormGroup;
  formSubmitted: boolean = false;
  provincias: Provincia[];
  usuario: Usuario;
  imgPerfil: string;

  constructor(
    private usuariosService: UsuarioService,
    private provinciaService: ProvinciasService,
    private fb: FormBuilder) {
    this.inicializarFormulario()
  }

  async ngOnInit() {
    this.usuario = await this.usuariosService.obtener().toPromise();
    this.imgPerfil = `url('${this.usuario.rutaFotoPerfil}')`;
    console.log(this.imgPerfil)
    this.provincias = await this.provinciaService.listar().toPromise()
    this.form = this.fb.group({
      usuario_nombre: [this.usuario.usuario_nombre, [Validators.required]],
      apellidos: [''],
      descripcion: [''],
      usuario_email: [this.usuario.usuario_email, [Validators.required, Validators.email]],
      usuario_telefono: [this.usuario.usuario_telefono || '', [Validators.required]],
      codigo_postal: [this.usuario.codigo_postal || '', [Validators.required]],
      id_provincia: [this.usuario.id_provincia || '', [Validators.required]],
      calle: [this.usuario.calle, [Validators.required]],
      id_direccion: [this.usuario.id_direccion],
      id_usuario: [this.usuario.id_usuario],
      poblacion: [this.usuario.poblacion, [Validators.required]],
    })
  }

  inicializarFormulario() {
    this.form = this.fb.group({
      usuario_nombre: ['', [Validators.required]],
      apellidos: [''],
      descripcion: [''],
      usuario_email: ['', [Validators.required, Validators.email]],
      usuario_telefono: ['', [Validators.required]],
      codigo_postal: ['', [Validators.required]],
      id_provincia: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      id_direccion: [''],
      id_usuario: [''],
      poblacion: ['', [Validators.required]],
    })
  }

  guardarUsuario() {
    this.formSubmitted = true;
    if (this.form.invalid) {
      console.warn("error")
      return
    }
    this.usuariosService.actualizar(this.form.value).toPromise();
  }

  cambiarFotoPerfil(event: any, cajaFotoPerfil: HTMLElement) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var img = reader.result;
      cajaFotoPerfil.style.backgroundImage = `url(${img})`;
      cajaFotoPerfil.style.backgroundSize = 'cover';
      this.usuariosService.cambiarFotoPerfil({ id_usuario: this.usuario.id_usuario, foto: img }).toPromise();
    };
  }

}
