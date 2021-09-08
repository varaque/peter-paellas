import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { DashboardComponent } from './dashboard.component';
import { PanelUsuarioComponent } from '../panel-usuario/panel-usuario.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { PublicaPaellaComponent } from '../publica-paella/publica-paella.component';
import { ActivarCuentaComponent } from '../activar-cuenta/activar-cuenta.component';
import { CambiarPasswordComponent } from '../cambiar-password/cambiar-password.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PublicaPaellaComponent,
    ActivarCuentaComponent,
    CambiarPasswordComponent,
    MisReservasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NgxMatMomentModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,

    MatInputModule,
  ],
  exports: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PublicaPaellaComponent,
    ActivarCuentaComponent,
    CambiarPasswordComponent
  ]
})
export class DashboardModule { }
