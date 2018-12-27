import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../_service/student.service';

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
    public activatedRoute: ActivatedRoute
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

    this.student.getStudent('Student/api/get/').subscribe(
      (succesResponse) => {
        this.Student = succesResponse;
        console.log(succesResponse);
      },

      (errorResponse) => {
        console.log(errorResponse);
      }
    );

  }
}
