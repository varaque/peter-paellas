import { InfoPaellaReservaInterface } from "../Interfaces/info-paella-reserva.interface";

export class InfoPaellaReserva implements InfoPaellaReservaInterface {
    usuario_nombre: string;
    paella_raciones: number;
    paella_precio: number;
    paella_mascotas: boolean;
    paella_ver: boolean;
    paella_descripcion: string;
    paella_fecha_coccion: string;
    tipo_paella_nombre: string;
    provincia_nombre: string;

    constructor(info: any) {
        if (info) {
            this.usuario_nombre = info.usuario_nombre;
            this.paella_raciones = info.paella_raciones;
            this.paella_precio = info.paella_precio;
            this.paella_mascotas = info.paella_mascotas == 0 ? false : true;
            this.paella_ver = info.paella_ver == 0 ? false : true;
            this.paella_descripcion = info.paella_descripcion;
            this.paella_fecha_coccion = info.paella_fecha_coccion;
            this.tipo_paella_nombre = info.tipo_paella_nombre;
            this.provincia_nombre = info.provincia_nombre;
        } else {
            this.usuario_nombre = null;
            this.paella_raciones = null;
            this.paella_precio = null;
            this.paella_mascotas = null;
            this.paella_ver = null;
            this.paella_descripcion = null;
            this.paella_fecha_coccion = null;
            this.tipo_paella_nombre = null;
            this.provincia_nombre = null;
        }
    }
}