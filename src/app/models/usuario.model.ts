import { environment } from "src/environments/environment";
import { UsuarioInterface } from "../Interfaces/usuario";

export class Usuario implements UsuarioInterface {

    id_usuario: number;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono: string;
    usuario_foto: string;
    calle: string;
    id_provincia: number;
    codigo_postal: number;
    provincia_nombre: string;
    id_direccion: number;
    poblacion: string;
    usuario_descripcion: string;
    usuario_rol: number;

    constructor(usuario?: any) {
        if (usuario) {
            this.id_usuario = +usuario.id_usuario;
            this.usuario_nombre = usuario.usuario_nombre;
            this.usuario_email = usuario.usuario_email;
            this.usuario_telefono = usuario.usuario_telefono;
            this.usuario_foto = usuario.usuario_foto;
            this.calle = usuario.calle;
            this.id_provincia = +usuario.id_provincia;
            this.codigo_postal = +usuario.codigo_postal;
            this.provincia_nombre = usuario.provincia_nombre;
            this.id_direccion = +usuario.id_direccion;
            this.poblacion = usuario.poblacion;
            this.usuario_descripcion = usuario.usuario_descripcion || 'Este usuario no tiene descripción disponible';
            this.usuario_rol = usuario.usuario_rol;
        } else {
            Object.keys(this).forEach(key => { this[key] = null });
        }
    }

    get rutaFotoPerfil() {
        return this.usuario_foto == null ? 'url(../../../assets/images/img-cocinero.jpg)' : `url(${environment.apiUrl}${this.usuario_foto})`;
    }

    get srcImg() {
        return this.usuario_foto == null ? 'assets/images/img-cocinero.jpg' : `${environment.apiUrl}${this.usuario_foto}`;
    }

    get ubicacionCompleta() {
        return this.provincia_nombre && this.poblacion ? `${this.provincia_nombre}, ${this.poblacion}` : 'Ubicación no disponible'
    }
}