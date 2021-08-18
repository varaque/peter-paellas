import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PanelUsuarioComponent } from '../panel-usuario/panel-usuario.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PerfilComponent,
    ReservaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    PanelUsuarioComponent,
    EditarPerfilComponent,
    PerfilComponent,
    ReservaComponent]
})
export class DashboardModule { }
