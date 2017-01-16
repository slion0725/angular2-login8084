import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface User {
  name: string;
  address?: {
    street?: string;
    postcode?: string;
  }
}

@Component({
  selector: 'app-exampleformgroup',
  templateUrl: './exampleformgroup.component.html',
  styleUrls: ['./exampleformgroup.component.css']
})
export class ExampleformgroupComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    // the long way
    this.myForm = new FormGroup({
      name: new FormControl('John', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
        street: new FormControl('', <any>Validators.required),
        postcode: new FormControl('8000')
      })
    });

    // // the short way
    // this.myForm = this._fb.group({
    //   name: ['John', [<any>Validators.required, <any>Validators.minLength(5)]],
    //   address: this._fb.group({
    //     street: ['', <any>Validators.required],
    //     postcode: ['']
    //   })
    // });

    this.subcribeToFormChanges();

    const people = {
      name: 'Jane',
      address: {
        street: 'High street',
        postcode: '94043'
      }
    };

    (<FormGroup>this.myForm).setValue(people, { onlySelf: true });

  }

  save(model: User, isValid: boolean) {

    console.log(model, isValid);
    console.log(this.myForm.value);
    console.log(this.myForm.status);
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }
}
