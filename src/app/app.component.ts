import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor( private userser: UserService, private authservice: AuthService, private route: ActivatedRoute, router: Router){
    this.authservice.user$.subscribe(user => {
      if (user) {
        this.userser.save(user);
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        router.navigateByUrl(returnUrl);

      }

    });
  }
}
