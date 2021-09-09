import { PaellaDestacadaInterface } from "../Interfaces/paella-destacada.interface";
import { environment } from "src/environments/environment";

export class PaellaDestacada implements PaellaDestacadaInterface {
    id_paella: number;
    tipo_paella_nombre: number;
    paella_foto_url: string;
    usuario_nombre: string;
    provincia_nombre: string;
    paella_fecha_coccion: string;
    valoracion: number;
    numero_votos: number;
    id_cocinero: number;

    constructor(paellaDestacada: any) {
        this.id_paella = paellaDestacada.id_paella;
        this.tipo_paella_nombre = paellaDestacada.tipo_paella_nombre;
        this.paella_foto_url = paellaDestacada.paella_foto_url;
        this.usuario_nombre = paellaDestacada.usuario_nombre;
        this.provincia_nombre = paellaDestacada.provincia_nombre;
        this.paella_fecha_coccion = paellaDestacada.paella_fecha_coccion;
        this.valoracion = paellaDestacada.valoracion;
        this.numero_votos = +paellaDestacada.numero_votos;
        this.id_cocinero = +paellaDestacada.id_cocinero;

    }
    get imagenSrc() {
        return this.paella_foto_url ? `${environment.apiUrl}${this.paella_foto_url}` : 'assets/images/paella.jpg'
    }
}