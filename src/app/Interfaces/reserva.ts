

export interface Reserva{

    id?: number;
    nombre: string;
    email: string;
    telefono: number;
    personas: number;
    mascota: boolean;
    mensaje?: string;
    ver_hacer_paella: boolean;
    ninos: boolean;
    fecha: string;
    paella_id: number;
    usuario_id: number;
    created_at?: string;
    updated_at?: string;

}