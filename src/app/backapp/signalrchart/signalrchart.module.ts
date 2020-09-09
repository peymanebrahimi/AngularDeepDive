import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/material/material.module';
import { SignalrchartRoutingModule } from './signalrchart-routing.module';
import { SignalrchartComponent } from './signalrchart/signalrchart.component';


@NgModule({
  declarations: [SignalrchartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    SignalrchartRoutingModule
  ]
})
export class SignalrchartModule { }
