import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitieshomeComponent } from "./citieshome/citieshome.component";
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: '', component: CitieshomeComponent,
    children: [
      { path: 'cities', component: CitiesComponent },
      // {path:'countries', component: countri}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldcityRoutingModule { }
