import { ProvinciaInterface } from "../Interfaces/provincia";

export class Provincia implements ProvinciaInterface {
    id_provincia: number;
    provincia_nombre: string

    constructor(provincia: any) {
        this.id_provincia = provincia['id_provincia'];
        this.provincia_nombre = provincia['provincia_nombre'];
    }
}