import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouteModule } from './route.module';

import { SimpleComponent } from './simple/simple.component';
import { JwtComponent } from './jwt/jwt.component';
import { Auth0Component } from './auth0/auth0.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    JwtComponent,
    Auth0Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
