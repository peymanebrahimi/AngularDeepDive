import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongohomeComponent } from "./mongohome/mongohome.component";

const routes: Routes = [
  {
    path: '', component: MongohomeComponent,
    children: [
      {
        path: 'supplystore',
        loadChildren: () => import('./supplystore/supplystore.module').then(x => x.SupplystoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongoRoutingModule { }
