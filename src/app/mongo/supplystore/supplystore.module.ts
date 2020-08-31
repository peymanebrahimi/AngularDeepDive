import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplystoreRoutingModule } from './supplystore-routing.module';
import { SupplystoreHomeComponent } from './supplystore-home/supplystore-home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleItemsComponent } from './sale-items/sale-items.component';


@NgModule({
  declarations: [SupplystoreHomeComponent, SaleListComponent, SaleItemsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SupplystoreRoutingModule
  ]
})
export class SupplystoreModule { }
