import { ValoracionInterface } from "../Interfaces/valoracion.interface";

export class Valoracion implements ValoracionInterface {

    id_valoracion: number;
    valoracion: number;
    id_usuario: number;
    id_paella: number;

    constructor(valoracion: Valoracion) {
        this.id_valoracion = valoracion.id_valoracion;
        this.valoracion = valoracion.valoracion;
        this.id_usuario = valoracion.id_usuario;
        this.id_paella = valoracion.id_paella;
    }
}