import { TipoPaellaInterface } from "../Interfaces/tipo-paellas";

export class TipoPaella implements TipoPaellaInterface {
    id_tipo_paella: number;
    tipo_paella_nombre: string;

    constructor(tipoPaella: any) {
        this.id_tipo_paella = tipoPaella['id_tipo_paella'];
        this.tipo_paella_nombre = tipoPaella['tipo_paella_nombre'];
    }
}