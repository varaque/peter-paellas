import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { EditarPerfilComponent } from "../editar-perfil/editar-perfil.component";
import { PanelUsuarioComponent } from "../panel-usuario/panel-usuario.component";
import { PublicaPaellaComponent } from "../publica-paella/publica-paella.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: PanelUsuarioComponent },
            { path: 'panel-usuario', component: PanelUsuarioComponent },
            { path: 'editar-perfil', component: EditarPerfilComponent },
            { path: 'publicar-paella', component: PublicaPaellaComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }