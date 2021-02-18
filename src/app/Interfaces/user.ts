

export interface User{

    id?: number;
    name: string;
    email: string;
    email_verified: string;
    password: string;
    foto: string;
    ubicacion: string;
    calificacion: number;
    baneado: boolean;
    tipo: number;
    created_at?: string;
    updated_at?: string;

}