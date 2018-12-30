import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../_service/student.service';
import { SpinnerService } from '../_service/spinner.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Student: any;
  ServerDate: any;

  constructor(
    public student: StudentService,
    public activatedRoute: ActivatedRoute,
    public spinner: SpinnerService
  ) {
      this.activatedRoute.data.subscribe( (success) => {
          console.log(success);
      }, (error) => {
          console.log(error);
      });
  }

  ngOnInit() {
    this.studentList();
  }

  studentList() {
    this.spinner.show.next(true);
    this.student.getStudent('Student/api/get/').subscribe(
      (succesResponse) => {
        this.Student = succesResponse;
        this.spinner.show.next(false);
        console.log(succesResponse);
      },

      (errorResponse) => {
        this.spinner.show.next(false);
        console.log(errorResponse);
      }
    );

  }
}
