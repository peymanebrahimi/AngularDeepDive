import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalrnewsRoutingModule } from './signalrnews-routing.module';
import { NewsComponent } from './news/news.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNews from './news.reducer';
import { NewsEffects } from './news.effects';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SignalrnewsRoutingModule,
    StoreModule.forFeature(fromNews.newsesFeatureKey, fromNews.newsReducer),
    EffectsModule.forFeature([NewsEffects]),
  ]
})
export class SignalrnewsModule { }
