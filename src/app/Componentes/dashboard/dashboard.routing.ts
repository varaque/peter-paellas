import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ActivarCuentaComponent } from "../activar-cuenta/activar-cuenta.component";
import { CambiarPasswordComponent } from "../cambiar-password/cambiar-password.component";
import { EditarPerfilComponent } from "../editar-perfil/editar-perfil.component";
import { PanelUsuarioComponent } from "../panel-usuario/panel-usuario.component";
import { PublicaPaellaComponent } from "../publica-paella/publica-paella.component";
import { DashboardComponent } from "./dashboard.component";
import { MisReservasComponent } from "./mis-reservas/mis-reservas.component";

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: PanelUsuarioComponent },
            { path: 'panel-usuario', component: PanelUsuarioComponent },
            { path: 'editar-perfil', component: EditarPerfilComponent },
            { path: 'publicar-paella', component: PublicaPaellaComponent },
            { path: 'activar-cuenta', component: ActivarCuentaComponent },
            { path: 'cambiar-password', component: CambiarPasswordComponent },
            { path: 'mis-reservas', component: MisReservasComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }