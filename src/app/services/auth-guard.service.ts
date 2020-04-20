import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AuthService , private router: Router) {
  }

  canActivate(router , state: RouterStateSnapshot ){
   return this.authservice.user$.pipe(map(user => {
       if (user) {return true; }
       else
       {
       this.router.navigate(['/Log-in'], {queryParams: {returnUrl: state.url}});
       return false;
       }
   }));
  }
}
