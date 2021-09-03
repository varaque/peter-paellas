import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './Componentes/dashboard/dashboard.routing';

import { PaellaComponent } from '../app/componentes/paella/paella.component';
import { CocinerosComponent } from './componentes/cocineros/cocineros.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MainBodyComponent } from './componentes/main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { AvisoLegalComponent } from './Componentes/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './Componentes/cookies/cookies.component';
import { CredencialesCambiadasComponent } from './Componentes/credenciales-cambiadas/credenciales-cambiadas.component';
import { PaellaReservadaComponent } from './Componentes/paella-reservada/paella-reservada.component';
import { LaunchComponent } from './Componentes/launch/launch.component';
import { PerfilCocineroComponent } from './Componentes/perfil-cocinero/perfil-cocinero.component';
import { BuscadorPaellasComponent } from './Componentes/buscador-paellas/buscador-paellas.component';
import { ReservarPaellaComponent } from './Componentes/reservar-paella/reservar-paella.component';


const appRoutes: Routes = [
  { path: '', component: MainBodyComponent },

  { path: 'credenciales-cambiadas', component: CredencialesCambiadasComponent },

  { path: 'preguntas-frecuentes', component: FaqComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'contacto', component: ContactoComponent },

  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'alta-usuario', component: RegisterComponent },
  { path: 'primer-paso', component: LaunchComponent },

  { path: 'cocineros', component: CocinerosComponent },
  { path: 'perfil-cocinero/:id', component: PerfilCocineroComponent },
  { path: 'buscar-paellas', component: BuscadorPaellasComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'paella/:id', component: PaellaComponent },
  { path: 'paella-reservada', component: PaellaReservadaComponent },
  { path: 'reservar-paella/:id', component: ReservarPaellaComponent },

  { path: 'recuperar-password', component: ForgotpassComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    DashboardRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }



