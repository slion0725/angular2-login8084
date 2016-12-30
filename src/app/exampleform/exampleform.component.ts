import { Component, OnInit } from '@angular/core';

interface Form {
  email: string;
  password: string;
  select: string;
  selectmultiple: string[];
}

interface Select {
  value: string;
  display: string;
  other: string;
}

@Component({
  selector: 'app-exampleform',
  templateUrl: './exampleform.component.html',
  styleUrls: ['./exampleform.component.css']
})
export class ExampleformComponent implements OnInit {

  public form: Form;

  public select: Select[] = [
    { value: 'apple', display: 'Apple', other: 'A' },
    { value: 'banana', display: 'Banana', other: 'B' },
    { value: 'cherry', display: 'Cherry', other: 'C' },
  ];

  public selectmultiple = [
    { value: 'apple', display: 'Apple' },
    { value: 'banana', display: 'Banana' },
    { value: 'cherry', display: 'Cherry' },
  ];

  public checkbox = [
    { value: 'apple', display: 'Apple' },
    { value: 'banana', display: 'Banana' },
    { value: 'cherry', display: 'Cherry' },
  ];

  public radio = [
    { value: 'apple', display: 'Apple' },
    { value: 'banana', display: 'Banana' },
    { value: 'cherry', display: 'Cherry' },
  ];

  constructor() { }

  ngOnInit() {
    this.form = {
      email: 'test@test.com',
      password: 'abc',
      select: this.select[1].value,
      selectmultiple: [this.selectmultiple[1].value]
    };
  }

  submit(value, valid: Form) {
    console.log(value);
    console.log(valid);
  }

}
