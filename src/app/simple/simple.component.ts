import { Component, OnInit } from '@angular/core';

declare var $: any;

interface Login {
  email: string;
  password: string;
  remember: boolean;
}

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  public login: Login;

  constructor() { }

  ngOnInit() {
    console.log($('body'));
    this.login = {
      email: null,
      password: null,
      remember: false
    }
  }

  submit(value: boolean, valid: Login) {
    console.log('valid', valid);
    if (!valid) {
      return;
    }
    console.log('value', value);
  }
}
