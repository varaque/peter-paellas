export interface User{

    id?: number;
    name: string;
    email: string;
    email_verified_at: string;
    password?: string;
    foto: string;
    ubicacion: string;
    calificacion: number;
    veces_puntuado?: number;
    baneado: boolean;
    tipo: number;
    created_at?: string;
    updated_at?: string;

}