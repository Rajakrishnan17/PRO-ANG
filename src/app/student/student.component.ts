import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { YearValidator } from './YearValidator';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;       // Variable declaration

  constructor(
    public formbuilder: FormBuilder  // Dependency injection(DI) of FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {   // Create a new function for Form builder
    this.studentForm = this.formbuilder.group(
      {
        // Declare the formcontrols name here.

        // String : [ 1.Attribute  2.Validators  3.Custom/Async Validators]
        // 1.Attributes:  '' or  { Vlaue: '', Readonly: ''}
        // 2.validators: [ Validators.reuired, Validator.minlength(2)]
        // 3. Custom / Async Vaidators -- Pending
        'firstname': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        'lastname': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        'age': ['', [Validators.required, Validators.min(18), Validators.max(150)]],
        'email': ['', [Validators.required]],
        'password': ['', [Validators.required]],
        'joinDate': ['', [Validators.required]],
        'endDate': ['', [Validators.required]]
      },
      {
        Validator: [YearValidator.dateExceed()]
      }
    );
  }
}


