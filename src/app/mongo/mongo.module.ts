import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongoRoutingModule } from './mongo-routing.module';
import { MongohomeComponent } from './mongohome/mongohome.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MongohomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MongoRoutingModule
  ]
})
export class MongoModule { }
