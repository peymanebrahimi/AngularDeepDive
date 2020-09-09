import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalrnewsRoutingModule } from './signalrnews-routing.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    SignalrnewsRoutingModule
  ]
})
export class SignalrnewsModule { }
