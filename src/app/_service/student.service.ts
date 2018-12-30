import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class StudentService {

  private baseUrl: string = environment.api_base_url;

  constructor(
    private http: HttpClient  // Dependency injection(DI) of FormBuilder
  ) {
  }

  getStudent(path: String) {
    return this.http.get(this.baseUrl + path);
  }

}
