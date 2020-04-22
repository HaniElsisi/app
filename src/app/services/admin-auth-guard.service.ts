import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private userser: UserService, private service: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.service.AppUser$.pipe(map((appUser: any) => appUser.isAdmin));
  }
}
