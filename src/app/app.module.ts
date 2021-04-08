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
import { HttpClientModule } from '@angular/common/http';
import { PublicaPaellaComponent } from './Componentes/publica-paella/publica-paella.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    //hasta el salto de linea es todo para el datepicker
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

//segundo datapicker de NgxMatNativeDateModule, NgxMatMomentModule,


import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { FilterPipe } from './pipes/filter.pipe';
import { EditaPerfilComponent } from './Componentes/edita-perfil/edita-perfil.component';
import { ActivarCuentaComponent } from './Componentes/activar-cuenta/activar-cuenta.component';
import { CredencialesCambiadasComponent } from './Componentes/credenciales-cambiadas/credenciales-cambiadas.component';
import { PaellaReservadaComponent } from './Componentes/paella-reservada/paella-reservada.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    PublicaPaellaComponent,
    FilterPipe,
    EditaPerfilComponent,
    ActivarCuentaComponent,
    CredencialesCambiadasComponent,
    PaellaReservadaComponent,

  ],
  imports: [
    //hasta el salto de linea es todo para el datepicker
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,

//ahora el segundo datapicker
BrowserModule,
HttpClientModule,
BrowserAnimationsModule,
MatDatepickerModule,
MatInputModule,
NgxMatDatetimePickerModule,
NgxMatTimepickerModule,
FormsModule,
ReactiveFormsModule,
MatButtonModule,
NgxMatMomentModule,
MatRadioModule,
MatSelectModule,
MatCheckboxModule,


    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    MatDatepickerModule,

    NgbModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

