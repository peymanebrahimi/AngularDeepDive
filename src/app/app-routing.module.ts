import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
