import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth ) {
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
}
