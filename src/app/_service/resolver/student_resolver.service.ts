import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

@Injectable()
export class StudentResolver implements Resolve<any> {

  private baseUrl: string = 'http://localhost:8080/';

  constructor(
    private http: HttpClient  // Dependency injection(DI) of FormBuilder
  ) {
  }

  resolve() {
    return this.http.get(this.baseUrl + 'Student/api/get/7');
    /*.subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }
}
