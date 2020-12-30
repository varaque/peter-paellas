import { PAELLAS } from "../paellasprueba";

export interface Paella {
    id: number;
    name: string;
    cocinero: string;
    dias: string;
    plazasT: number;
    plazas: number;
    lugar: string;
    precio: number;
    mascota: boolean;
    ver: boolean;
  }

