import { environment } from "src/environments/environment";
import { CocineroInterface } from "../Interfaces/cocinero.interface";
import { PaellaDestacada } from "./paella-destacada.model";

export class Cocinero implements CocineroInterface {

    id_usuario: number;
    usuario_nombre: string;
    usuario_foto: string;
    cantidad_paellas: number;
    direccion: string;
    usuario_descripcion: string;
    provincia_nombre: string;
    poblacion: string;
    paellas_disponibles: PaellaDestacada[];
    valoracion: number;
    numero_votos: number;

    constructor(datos?: any) {
        this.id_usuario = datos.cocinero.id_usuario;
        this.usuario_nombre = datos.cocinero.usuario_nombre;
        this.usuario_foto = datos.cocinero.usuario_foto;
        this.cantidad_paellas = datos.cocinero.cantidad_paellas;
        this.direccion = (datos.cocinero.provincia_nombre || 'Valencia') + ", " + (datos.cocinero.pais || 'Espana');
        this.usuario_descripcion = datos.cocinero.usuario_descripcion;
        this.paellas_disponibles = datos.paellas_disponibles ? datos.paellas_disponibles.map((paella: any) => new PaellaDestacada(paella)) : [];
        this.valoracion = datos.cocinero.valoracion;
        this.numero_votos = datos.cocinero.numero_votos;
    }

    get rutaBackgroundImg() {
        return this.usuario_foto == null ? 'url(../../../assets/images/img-cocinero.jpg)' : `url(${environment.apiUrl}${this.usuario_foto})`;
    }

    get srcImg() {
        return this.usuario_foto == null ? 'assets/images/img-cocinero.jpg' : `${environment.apiUrl}${this.usuario_foto}`;
    }

    get ubicacionCompleta() {
        return this.provincia_nombre && this.poblacion ? `${this.provincia_nombre}, ${this.poblacion}` : 'Ubicación no disponible'
    }
}