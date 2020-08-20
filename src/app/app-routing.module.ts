import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthCheckComponent } from './health-check/health-check.component';

const routes: Routes = [
  { path: 'health-check', component: HealthCheckComponent },
  {
    path: 'ContentProjection',
    loadChildren: () => import('./content-projection/content-projection.module').then(x => x.ContentProjectionModule)
  },
  {
    path: 'ngTemplate',
    loadChildren: () => import('./templates/templates.module').then(x => x.TemplatesModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(x => x.ReactiveModule)
  },
  {
    path: 'backapp',
    loadChildren: () => import('./backapp/backapp.module').then(x => x.BackappModule)
  },
  {
    path: 'worldcity',
    loadChildren: () => import('./worldcity/worldcity.module').then(x => x.WorldcityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
