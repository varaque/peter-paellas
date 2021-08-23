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

    constructor(usuario?: any) {

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
    }

    get rutaFotoPerfil() {
        return this.usuario_foto == null ? '../../../assets/images/img-cocinero.jpg' : `${environment.apiUrl}${this.usuario_foto}`;
    }
}