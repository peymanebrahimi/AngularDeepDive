import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from '@angular/common/http';
import { HealthCheckComponent } from './health-check/health-check.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HealthCheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
