import { Component, OnInit } from '@angular/core';

import { Auth0Service } from '../services/auth0.service';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.css']
})
export class Auth0Component implements OnInit {

  constructor(
    private authHttp: AuthHttp,
    private auth0: Auth0Service,
  ) { }

  ngOnInit() {
  }

}
