import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent, data: { title: 'Nosotros' }},
  { path: 'rutas', component: RutasComponent, data: { title: 'Rutas' }, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'nostros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
