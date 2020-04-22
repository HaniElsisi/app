import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { UserIn } from '../services/userinfo';

@Component({
selector: 'app-nav-bar',
templateUrl: './nav-bar.component.html',	styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent {

appUser: UserIn;
constructor(public service: AuthService) {
  this.service.AppUser$.subscribe(newappUser => this.appUser = newappUser);
  console.log(this.appUser);
}

logout() {
this.service.logout();
}
}
