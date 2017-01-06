import { Component, OnInit } from '@angular/core';

interface Select {
  value: string;
  display: string;
  other: string;
}

interface Form {
  email: string;
  password: string;
  select: Select;
  selectmultiple: string[];
  isActive: boolean;
  toggle: string;
  gender: string;
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

  public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
  ];

  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];

  constructor() { }

  ngOnInit() {
    this.form = {
      email: '',
      password: '',
      select: this.select[0],
      selectmultiple: [this.selectmultiple[0].value],
      isActive: false,
      toggle: this.toggles[0].value,
      gender: this.genders[0].value
    };
  }

  submit(value, valid: Form) {
    console.log(value);
    console.log(valid);
  }

}
