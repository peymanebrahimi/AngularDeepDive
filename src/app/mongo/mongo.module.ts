import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongoRoutingModule } from './mongo-routing.module';
import { MongohomeComponent } from './mongohome/mongohome.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KendoModule } from '../kendo/kendo.module';


@NgModule({
  declarations: [MongohomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule,
    ReactiveFormsModule,
    MongoRoutingModule
  ]
})
export class MongoModule { }
