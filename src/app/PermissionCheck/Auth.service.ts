import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (this.Authenticated()) {
      console.log('success');
      return true ;
    } else {
      console.log('failure');
      return false ;
    }
  }
  Authenticated(): boolean {
      localStorage.setItem('token', '12345');
      return !!localStorage.getItem('token');
  }
}
