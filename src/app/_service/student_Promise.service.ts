import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable()
export class StudentPromiseService {

  private baseUrl: string = "http://localhost:8080/";

  constructor(
    private http: HttpClient  // Dependency injection(DI) of FormBuilder
  ) {
  }

  getDate(): Promise<any> {
    let promise = new Promise(
      (resolve, reject) => {
        this.http.get(this.baseUrl + 'Student/api/get/1').subscribe(
          (success) => {
            console.log(success);
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
      });
    return promise;
  }

}
