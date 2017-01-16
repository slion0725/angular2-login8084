import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SimpleComponent } from './simple/simple.component';
import { JwtComponent } from './jwt/jwt.component';
import { Auth0Component } from './auth0/auth0.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ExampleformComponent } from './exampleform/exampleform.component';
import { ExampleformgroupComponent } from './exampleformgroup/exampleformgroup.component';
import { NextedfromComponent } from './nextedfrom/nextedfrom.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'jwt', component: JwtComponent },
  { path: 'auth0', component: Auth0Component },
  { path: 'logout', component: LogoutComponent },
  { path: 'exampleform', component: ExampleformComponent },
  { path: 'exampleformgroup', component: ExampleformgroupComponent },
  { path: 'nextedfrom', component: NextedfromComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}