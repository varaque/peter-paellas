/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaellaComponent} from '../app/paella/paella.component'

const routes: Routes = [
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {PaellaComponent} from '../paella/paella.component';
const appRoutes: Routes = [
  //{ path: 'paella', loadChildren: () => import('./paella/paella.component').then(m => m.PaellaComponent), },
  { path: 'app', component: AppComponent },
  { path: 'paella', component: PaellaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



