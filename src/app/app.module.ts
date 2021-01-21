/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaellaComponent } from './paella/paella.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MainBodyComponent } from './main-body/main-body.component';

const rutas: Routes{
  path: 'paella',
  component: PaellaComponent,
}
@NgModule({
  declarations: [
    AppComponent,
    PaellaComponent,
    PruebaComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaellaComponent } from './componentes/paella/paella.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { MainBodyComponent } from './componentes/main-body/main-body.component';
import { CocinerosComponent } from './componentes/cocineros/cocineros.component';
import { PaellaSearchComponent } from './componentes/paella-search/paella-search.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { LoginComponent } from './login/login.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { LoguserComponent } from './login/loguser/loguser.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AvisoLegalComponent } from './Componentes/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './Componentes/cookies/cookies.component';
import { PanelUsuarioComponent } from './Componentes/panel-usuario/panel-usuario.component';
//import { MatFormFieldModule} from '@angular/form-field';


@NgModule({
  declarations: [
    AppComponent,
    PaellaComponent,
    ReservaComponent,
    MainBodyComponent,
    CocinerosComponent,
    PaellaSearchComponent,
    PerfilComponent,
    ContactoComponent,
    FaqComponent,
    LoginComponent,
    ComoFuncionaComponent,
    LoguserComponent,
    RegisterComponent,
    ForgotpassComponent,
    HeaderComponent,
    FooterComponent,
    AvisoLegalComponent,
    CookiesComponent,
    PanelUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    //MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

