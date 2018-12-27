import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder  // Dependency injection(DI) of FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {   // Create a new function for Form builder
    this.loginForm = this.formbuilder.group(
      {
        // Declare the formcontrols name here.

        // String : [ 1.Attribute  2.Validators  3.Custom/Async Validators]
        // 1.Attributes:  '' or  { Vlaue: '', Readonly: ''}
        // 2.validators: [ Validators.reuired, Validator.minlength(2)]
        // 3. Custom / Async Vaidators -- Pending
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]]
      },
    );
  }
}
