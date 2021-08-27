import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { PanelUsuarioComponent } from '../panel-usuario/panel-usuario.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { PublicaPaellaComponent } from '../publica-paella/publica-paella.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PublicaPaellaComponent
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
    /*MatSelectModule, */


  ],
  exports: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PublicaPaellaComponent
  ]
})
export class DashboardModule { }
