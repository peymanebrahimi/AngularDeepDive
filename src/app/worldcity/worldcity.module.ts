import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldcityRoutingModule } from './worldcity-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { MaterialModule } from '../material/material.module';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [CitiesComponent, WorldhomeComponent, CountriesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WorldcityRoutingModule
  ]
})
export class WorldcityModule { }
