

export interface Paella{

    id?: number;
    nombre: string;
    descripcion?: string;
    cocinero: string;
    foto?: string;
    ubicacion: string;
    provincia: string;      //en verdad con los cambios de hacer esto cerrado podria guardar esto y municipio como int, pero bueno ya se verá
/*     municipio: string;   aun no me voy a poner a añadir esto asi que lo dejo comentado para evitar errores de compilacion de momento        */
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