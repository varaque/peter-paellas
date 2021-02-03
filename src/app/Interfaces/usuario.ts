

export interface Usuario{

    id?: number;
    nombre: string;
    email: string;
    email_verified: boolean;
    contrasena: string;
    foto: string;
    ubicacion: string;
    calificacion: number;
    baneado: boolean;
    tipo: number;
    created_at?: string;
    updated_at?: string;

}