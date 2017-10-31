import { UserService } from './user.service';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }

}
