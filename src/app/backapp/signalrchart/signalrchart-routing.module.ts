import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalrchartComponent } from "./signalrchart/signalrchart.component";

const routes: Routes = [
  { path: '', component: SignalrchartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalrchartRoutingModule { }
