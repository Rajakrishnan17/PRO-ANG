import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {

  private baseUrl: string = "http://localhost:8080/";

  constructor(
    private http: HttpClient  // Dependency injection(DI) of FormBuilder
  ) {
  }

  getStudent(path: String) {
    return this.http.get(this.baseUrl + path);
  }

}
