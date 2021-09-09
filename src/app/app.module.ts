import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { FilterPipe } from './pipes/filter.pipe';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es')

//hasta el salto de linea es todo para el datepicker
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

//segundo datapicker de NgxMatNativeDateModule, NgxMatMomentModule,




import { AppComponent } from './app.component';
import { PaellaComponent } from './componentes/paella/paella.component';
import { MainBodyComponent } from './componentes/main-body/main-body.component';
import { CocinerosComponent } from './componentes/cocineros/cocineros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { LoginComponent } from './login/login.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AvisoLegalComponent } from './Componentes/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './Componentes/cookies/cookies.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CredencialesCambiadasComponent } from './Componentes/credenciales-cambiadas/credenciales-cambiadas.component';
import { PaellaReservadaComponent } from './Componentes/paella-reservada/paella-reservada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaunchComponent } from './Componentes/launch/launch.component';
import { DashboardModule } from './Componentes/dashboard/dashboard.module';
import { PerfilCocineroComponent } from './Componentes/perfil-cocinero/perfil-cocinero.component';
import { BuscadorPaellasComponent } from './Componentes/buscador-paellas/buscador-paellas.component';
import { ReservarPaellaComponent } from './Componentes/reservar-paella/reservar-paella.component';
import { StripeComponent } from './Componentes/stripe/stripe.component';


@NgModule({
  declarations: [
    AppComponent,
    PaellaComponent,
    MainBodyComponent,
    CocinerosComponent,
    ContactoComponent,
    FaqComponent,
    LoginComponent,
    ComoFuncionaComponent,
    RegisterComponent,
    ForgotpassComponent,
    HeaderComponent,
    FooterComponent,
    AvisoLegalComponent,
    CookiesComponent,
    FilterPipe,
    CredencialesCambiadasComponent,
    PaellaReservadaComponent,
    LaunchComponent,
    PerfilCocineroComponent,
    BuscadorPaellasComponent,
    ReservarPaellaComponent,
    StripeComponent,

  ],
  imports: [
    ScrollingModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    OverlayModule,
    PortalModule,

    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DashboardModule,

    NgbModule,

    //hasta el salto de linea es todo para el datepicker
    MatTreeModule,
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
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    NgxMatMomentModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

