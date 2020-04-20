import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User ){
    // tslint:disable-next-line: no-unused-expression
    this.db.object('/users/' + user.uid).update; ({
     name: user.displayName,
      email: user.email
    });
  }
}
