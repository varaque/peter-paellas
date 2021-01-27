import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL: string = 'http://127.0.0.1:8000'; //pruebas DE MOMENTO ESTO VALE VERGA
  // URL: string = 'https://dev.bipeek.com/api'; //pruebasejemplo
  //URL: string = 'https://app.bipeek.com/api'; //realejemplo

  constructor(private http: HttpClient) { }

  async getEvento(token: string){
    const httpHeaders = new HttpHeaders ({
      "Authorization" : `Bearer ${token}`
    });
    let event = <Event>await this.http.get(`${this.URL}/evento`, {headers:httpHeaders}).toPromise();
    return event['evento'];
  }

  // USUARIO
  getUsuario(id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.URL}/usuario/${id}`, {headers: httpHeaders});
  }

  async getChats(id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let usuario = await this.http.get(`${this.URL}/usuario/${id}`, {headers: httpHeaders}).toPromise();
    return usuario['usuario_evento']['chats'];
  }

  async getUsuarioChat(id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let usuario = await this.http.get(`${this.URL}/usuario/${id}`, {headers: httpHeaders}).toPromise();
    return usuario['usuario_evento'];
  }

  async getUsuarios(token: string, pagina?: number, cantidad?: number, user_id?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let usuarios = await this.http.get(`${this.URL}/usuarios/${pagina}/${cantidad}`, {headers: httpHeaders}).toPromise();
    if(user_id) {
      let usuarios_filtered = [];
      usuarios['usuarios_evento'].forEach(usuario => {
        if(usuario.usuario.id != user_id) {
          usuarios_filtered.push(usuario);
        }
      })
      return usuarios_filtered;
    } else {
      return usuarios['usuarios_evento'];
    }
  }

  login(email: string, password: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/login`, { email: email, password: password }, { headers: httpHeaders });
  }

  // CHAT
  async getChat(id_1: number, id_2: number, token: string, pagina?: number, cantidad?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url_chat = `${this.URL}/chat/${id_1}/${id_2}`;
    cantidad ? pagina ? url_chat += `/${pagina}/${cantidad}` : `/1/${cantidad}` : pagina ? '/1' : '';
    let mensajes = await this.http.get(url_chat, { headers: httpHeaders }).toPromise();
    mensajes['chats'].sort((a, b) => new Date(a.created_at) > new Date(b.created_at) ? 1 : -1);
    return mensajes['chats'];
  }

  marcarChatLeido(id_1: number, id_2: number, mensaje_id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/chat/${id_1}/${id_2}/leido`, { mensaje_id: mensaje_id }, { headers: httpHeaders });
  }

  async getChatUsuario(usuario_id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let chats = await this.http.get(`${this.URL}/chat/usuario/${usuario_id}`, { headers: httpHeaders }).toPromise();
    return chats['chats'];
  }

  addChat(id_1: number, id_2: number, mensaje: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/chat/${id_1}/${id_2}`, { mensaje: mensaje }, { headers: httpHeaders });
  }

  // PREGUNTAS
  getPreguntas(sesion: number, token: string, pagina?: number, cantidad?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url_chat = `${this.URL}/preguntas/${sesion}`;
    pagina ? url_chat += `/${pagina}` : '';
    cantidad ? pagina ? url_chat += `/${pagina}/${cantidad}` : `/1/${cantidad}` : '';
    return this.http.get(url_chat, { headers: httpHeaders })
  }

  getPregunta(sesion: number, id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.URL}/pregunta/${sesion}/${id}`, { headers: httpHeaders });
  }

  addPregunta(sesion: number, token: string, pregunta: string, respuestas: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/preguntas/${sesion}`, { pregunta: pregunta, respuestas: respuestas }, { headers: httpHeaders });
  }

  editPregunta(sesion: number, id: number, token: string, pregunta: string, respuestas: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/pregunta/${sesion}/${id}`, { pregunta: pregunta, respuestas: respuestas }, { headers: httpHeaders });
  }

  deletePregunta(sesion: number, id: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/pregunta/${sesion}/${id}/eliminar`, null, { headers: httpHeaders });
  }

  // MENSAJES
  getMensajes(sesion: number, token: string, pagina?: number, cantidad?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url_mensaje = `${this.URL}/mensajes/${sesion}`;
    pagina ? url_mensaje += `/${pagina}` : '';
    cantidad ? pagina ? url_mensaje += `/${pagina}/${cantidad}` : `/1/${cantidad}` : '';
    return this.http.get(url_mensaje, { headers: httpHeaders });
  }

  addMensaje(sesion: number, mensaje: string, id: number, token: string) {
    console.log(id);
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let data = {};
    if(id) {
      data['mensaje'] = mensaje;
      data['usuario_id'] = id;
    } else {
      data['mensaje'] = mensaje['pregunta'];
    }
    return this.http.post(`${this.URL}/mensajes/${sesion}`, data, { headers: httpHeaders });
  }

  editMensaje(sesion: number, id: number, token: string, mensaje: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/mensaje/${sesion}/${id}`, { mensaje: mensaje }, { headers: httpHeaders });
  }

  actionsMensaje(sesion: number, id: number, token: string, action: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/mensaje/${sesion}/${id}/${action}`, null, { headers: httpHeaders });
  }

  // VALORACIONES
  valorarSesion(sesion: number, valoracion: number, usuario: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/evento/sesion/${sesion}/valoracion`, { valoracion: valoracion, usuario_id: usuario }, { headers: httpHeaders });
  }

  valorarDetalle(detalle: number, valoracion: number, usuario: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/evento/detalle_sesion/${detalle}/valoracion`, { valoracion: valoracion, usuario_id: usuario }, { headers: httpHeaders });
  }

  // TIEMPOS
  getTiempos(sesion: number, usuario: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.URL}/asistencia/${sesion}/${usuario}`, { headers: httpHeaders });
  }

  postTiempos(sesion: number, usuario: number, inicio: string, fin: string, token: string, detalle?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let body = {
      inicio: inicio,
      fin: fin
    }
    if(detalle) {
      body['detalle_sesion_id'] = detalle;
    }
    return this.http.post(`${this.URL}/asistencia/${sesion}/${usuario}`, body, { headers: httpHeaders });
  }

  // SESIONES
  inicioSesion(sesion: number, token: string, inicio?: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let body = {};
    if(inicio) {
      body['inicio'] = inicio;
    }
    return this.http.post(`${this.URL}/evento/sesion/${sesion}/inicio`, body, { headers: httpHeaders });
  }

  finSesion(sesion: number, token: string, fin?: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let body = {};
    if(fin) {
      body['fin'] = fin;
    }
    return this.http.post(`${this.URL}/evento/sesion/${sesion}/fin`, body, { headers: httpHeaders });
  }

  // RECUPERAR CONTRASEÑA
  recuperarContrasenya(email: string, token: string, url_reset?: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let body = {
      email: email
    };
    if(url_reset) {
      body['url_reset'] = url_reset
    }
    return this.http.post(`${this.URL}/recuperar-password`, body, { headers: httpHeaders });
  }

  recuperarContrasenyaCheckToken(token_pass: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/recuperar-password/validar-token`, { token: token_pass }, { headers: httpHeaders });
  }

  resetContrasenya(token_pass: string, password: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/recuperar-password/reset-password`, { token: token_pass, password: password }, { headers: httpHeaders });
  }

  // REGISTRO
  checkUserRegistrado(email: string, pass: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/registro/login`, { email: email, password: pass }, { headers: httpHeaders });
  }

  registerUser(data, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/registro`, data, { headers: httpHeaders });
  }

  // FORO
  getMensajesForo(tipo: string, sesion: number, token: string, pagina?: number, cantidad?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url_mensaje = `${this.URL}/foro/${tipo}/${sesion}`;
    pagina ? url_mensaje += `/${pagina}` : '';
    cantidad ? pagina ? url_mensaje += `/${pagina}/${cantidad}` : `/1/${cantidad}` : '';
    return this.http.get(url_mensaje, { headers: httpHeaders });
  }

  getRespuestasMensajeForo(tipo: string, sesion: number, mensaje_id: number, token: string, pagina?: number, cantidad?: number) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url_mensaje = `${this.URL}/foro/${tipo}/${sesion}/respuestas/${mensaje_id}`;
    pagina ? url_mensaje += `/${pagina}` : '';
    cantidad ? pagina ? url_mensaje += `/${cantidad}` : `/1/${cantidad}` : '';
    return this.http.get(url_mensaje, { headers: httpHeaders });
  }

  postMensajeForo(tipo: string, sesion: number, usuario: number, mensaje: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/foro/${tipo}/${sesion}`, { usuario_id: usuario, mensaje: mensaje }, { headers: httpHeaders });
  }

  postRespuestaForo(tipo: string, sesion: number, mensaje_id: number, usuario: number, mensaje: string, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/foro/${tipo}/${sesion}/${mensaje_id}`, { usuario_id: usuario, mensaje: mensaje }, { headers: httpHeaders });
  }

  eliminarMensajeForo(tipo: string, sesion: number, mensaje_id: number, usuario: number, token: string) {
    const httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.URL}/foro/${tipo}/${sesion}/${mensaje_id}/eliminar`, { usuario_id: usuario }, { headers: httpHeaders });
  }

}
