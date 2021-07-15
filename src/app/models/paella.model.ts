import { PaellaInterface } from "../Interfaces/paella";

export class Paella implements PaellaInterface {

    id_paella: number;
    paella_nombre: string;
    paella_descripcion: string;
    paella_precio: number;
    paella_fecha_coccion: string;
    paella_foto: string;
    paella_tipo: number;
    paella_raciones: number;
    paella_ver: boolean;
    paella_mascotas: boolean;
    id_cocinero: number;
    id_provincia: number;

    constructor(paella?: any) {
        this.id_paella = paella['id_paella'];
        this.paella_nombre = paella['paella_nombre'];
        this.paella_descripcion = paella['paella_descripcion'];
        this.paella_precio = paella['paella_precio'];
        this.paella_fecha_coccion = paella['paella_fecha_coccion'];
        this.paella_foto = paella['paella_foto'];
        this.paella_tipo = paella['paella_tipo'];
        this.paella_raciones = paella['paella_raciones'];
        this.paella_ver = paella['paella_ver'];
        this.paella_mascotas = paella['paella_mascotas'];
        this.id_cocinero = paella['id_cocinero'];
        this.id_provincia = paella['id_provincia'];
    }
}