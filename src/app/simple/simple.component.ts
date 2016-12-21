import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($('body'));
  }

}
