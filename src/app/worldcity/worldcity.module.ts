import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldcityRoutingModule } from './worldcity-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { MaterialModule } from '../material/material.module';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountriesComponent } from './countries/countries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityeditComponent } from './cityedit/cityedit.component';
import { CountryeditComponent } from './countryedit/countryedit.component';


@NgModule({
  declarations: [CitiesComponent, WorldhomeComponent, CountriesComponent, CityeditComponent, CountryeditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    WorldcityRoutingModule
  ]
})
export class WorldcityModule { }
