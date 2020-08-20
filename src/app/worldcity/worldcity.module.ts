import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldcityRoutingModule } from './worldcity-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { CitieshomeComponent } from './citieshome/citieshome.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [CitiesComponent, CitieshomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WorldcityRoutingModule
  ]
})
export class WorldcityModule { }
