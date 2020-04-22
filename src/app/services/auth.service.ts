import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators/switchMap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { UserIn } from './userinfo';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private authser: UserService,
              private router: ActivatedRoute,
     ) {
   this.user$ = firebaseAuth.authState;
  }

  login() {
    // const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    // localStorage.setItem('returnUrl' , returnUrl ) ;
    this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
  this.firebaseAuth.auth.signOut();
  }

  get AppUser$(): Observable<UserIn> {
    return this.user$.pipe(switchMap(user => {
      if (user)
      {
        return this.authser.getUser(user.uid).valueChanges();
      }
      else
      {
        return Observable.of(null);
      }

    }));
  }
}
