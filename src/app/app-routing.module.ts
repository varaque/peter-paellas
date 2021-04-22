import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { PaellaComponent } from '../app/componentes/paella/paella.component';
import { CocinerosComponent } from './componentes/cocineros/cocineros.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MainBodyComponent } from './componentes/main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { AvisoLegalComponent } from './Componentes/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './Componentes/cookies/cookies.component';
import { PanelUsuarioComponent } from './Componentes/panel-usuario/panel-usuario.component';
import { PublicaPaellaComponent } from './Componentes/publica-paella/publica-paella.component';
import { EditaPerfilComponent } from './Componentes/edita-perfil/edita-perfil.component';
import { ActivarCuentaComponent } from './Componentes/activar-cuenta/activar-cuenta.component';
import { CredencialesCambiadasComponent } from './Componentes/credenciales-cambiadas/credenciales-cambiadas.component';
import { PaellaReservadaComponent } from './Componentes/paella-reservada/paella-reservada.component';




const appRoutes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  //{ path: 'paella', loadChildren: () => import('./paella/paella.component').then(m => m.PaellaComponent), },
  { path: 'paella/:id', component: PaellaComponent },
  { path: 'cocineros', component: CocinerosComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: MainBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comofunciona', component: ComoFuncionaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'avisolegal', component: AvisoLegalComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'panel-usuario', component: PanelUsuarioComponent },
  { path: 'publica-paella', component: PublicaPaellaComponent },
  { path: 'edita-perfil', component: EditaPerfilComponent },
  { path: 'activar-cuenta', component: ActivarCuentaComponent },
  { path: 'credenciales-cambiadas', component: CredencialesCambiadasComponent },
  { path: 'paella-reservada', component: PaellaReservadaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



