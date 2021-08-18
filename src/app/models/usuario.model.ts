import { UsuarioInterface } from "../Interfaces/usuario";


export class Usuario implements UsuarioInterface {


    id_usuario: number;
    usuario_nombre: string;
    usuario_email: string;
    email_verificado: boolean;
    usuario_telefono: string;
    usuario_foto: string;
    usuario_rol: string;
    usuario_estado: number;

    constructor(usuario?: any) {
        this.id_usuario = usuario.id_usuario,
            this.usuario_nombre = usuario.usuario_nombre,
            this.usuario_email = usuario.usuario_email,
            this.email_verificado = usuario.email_verificado,
            this.usuario_telefono = usuario.usuario_telefono,
            this.usuario_foto = usuario.usuario_foto,
            this.usuario_rol = usuario.usuario_rol,
            this.usuario_estado = usuario.usuario_estado;
    }
}