import { PaellaDestacada } from "../models/paella-destacada.model";


export interface CocineroInterface {
    id_usuario: number
    usuario_nombre: string,
    usuario_foto: string,
    cantidad_paellas: number;
    direccion: string;
    usuario_descripcion: string;
    provincia_nombre: string;
    poblacion: string;
    paellas_disponibles: PaellaDestacada[];
    valoracion:number;
    numero_votos:number;
}