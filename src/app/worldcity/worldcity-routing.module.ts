import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountriesComponent } from './countries/countries.component';
import { CityeditComponent } from './cityedit/cityedit.component';
import { CountryeditComponent } from './countryedit/countryedit.component';

const routes: Routes = [
  {
    path: '', component: WorldhomeComponent,
    children: [
      { path: 'cities', component: CitiesComponent },
      { path: 'city/:id', component: CityeditComponent },
      { path: 'city', component: CityeditComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'country/:id', component: CountryeditComponent },
      { path: 'country', component: CountryeditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldcityRoutingModule { }
