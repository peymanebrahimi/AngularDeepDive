import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiAuthorizationModule } from "./authorization/api-authorization.module";
import { AuthorizeInterceptor } from "./authorization/authorize.interceptor";
import { HealthCheckComponent } from './health-check/health-check.component';
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { NavsideComponent } from './navside/navside.component';
import { metaReducers, reducers } from "./reducers";
import { KendoModule } from "./kendo/kendo.module";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HealthCheckComponent,
    NavsideComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ApiAuthorizationModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    KendoModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

