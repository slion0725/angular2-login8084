import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleComponent } from './simple/simple.component';
import { JwtComponent } from './jwt/jwt.component';
import { Auth0Component } from './auth0/auth0.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'simple', component: SimpleComponent },
  { path: 'jwt', component: JwtComponent },
  { path: 'auth0', component: Auth0Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RouteModule {}