import { environment } from "src/environments/environment";
import { ReservaInterface } from "../Interfaces/reserva.interface";


export class Reserva implements ReservaInterface {

    id_paella: number;
    id_reserva: number;
    tipo_paella_nombre: number;
    paella_foto_url: string;
    usuario_nombre: string;
    provincia_nombre: string;
    paella_fecha_coccion: string;
    valoracion: number;
    numero_votos: number;

    constructor(reserva: any) {
        if (reserva) {
            this.id_paella = reserva.id_paella;
            this.id_reserva = reserva.id_reserva;
            this.tipo_paella_nombre = reserva.tipo_paella_nombre;
            this.paella_foto_url = reserva.paella_foto_url;
            this.usuario_nombre = reserva.usuario_nombre;
            this.provincia_nombre = reserva.provincia_nombre;
            this.paella_fecha_coccion = reserva.paella_fecha_coccion;
            this.valoracion = reserva.valoracion;
            this.numero_votos = reserva.numero_votos;
        } else {
            Object.keys(this).forEach(key => this[key] = undefined);
        }
    }
    get imagenSrc() {
        return this.paella_foto_url ? `${environment.apiUrl}${this.paella_foto_url}` : 'assets/images/paella.jpg'
    }
}
