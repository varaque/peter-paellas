

export interface Paella{

    id?: number;
    nombre: string;
    descripcion: string;
    cocinero: string;
    foto?: string;
    ubicacion: string;
    plazas: number;
    plazas_libres: number;
    precio: number; 
    telefono: string;
    fecha: string;
    ver_hacer_paella: boolean;
    ninos: boolean;
    mascota: boolean;
    categoria: number;
    usuario_id: number;
    created_at?: string;
    updated_at?: string;

}