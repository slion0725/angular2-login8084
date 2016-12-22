import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RoutingModule } from './routing.module';

import { SimpleComponent } from './simple/simple.component';
import { JwtComponent } from './jwt/jwt.component';
import { Auth0Component } from './auth0/auth0.component';

import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Auth0Service } from './services/auth0.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
          tokenGetter: (() => sessionStorage.getItem('token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    JwtComponent,
    Auth0Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  providers: [
    // AUTH_PROVIDERS,
    Auth0Service,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
