import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path: '', component: WorldhomeComponent,
    children: [
      { path: 'cities', component: CitiesComponent },
      { path: 'countries', component: CountriesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldcityRoutingModule { }
