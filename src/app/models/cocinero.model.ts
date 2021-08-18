import { CocineroInterface } from "../Interfaces/cocinero.interface";

export class Cocinero implements CocineroInterface {

    id_usuario: number;
    usuario_nombre: string;
    usuario_foto: string;
    cantidad_paellas: number;
    direccion: string;

    constructor(cocinero?: any) {
        this.id_usuario = cocinero.id_usuario;
        this.usuario_nombre = cocinero.usuario_nombre;
        this.usuario_foto = cocinero.usuario_foto || '../../../assets/images/img-cocinero.jpg';
        this.cantidad_paellas = cocinero.cantidad_paellas;
        this.direccion = (cocinero.provincia_nombre || 'Valencia') + ", " + (cocinero.pais || 'Espana');
    }
}