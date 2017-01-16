import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nextedfrom-address',
  templateUrl: './nextedfrom-address.component.html',
  styleUrls: ['./nextedfrom-address.component.css']
})
export class NextedfromAddressComponent {

  // we will pass in address from App component
  @Input('group')
  public addressForm: FormGroup;

}
