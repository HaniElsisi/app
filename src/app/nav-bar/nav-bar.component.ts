import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
selector: 'app-nav-bar',
templateUrl: './nav-bar.component.html',	styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent {

constructor(public service: AuthService) {
}

logout() {
this.service.logout();
}
}
