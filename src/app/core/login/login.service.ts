import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import {firebase} from '@firebase/app';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

interface User{
  uid:string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user:Observable<User | null>;
  constructor(
    private afAuth:AngularFireAuth,
    private afs:AngularFirestore
  ) { 
    this.user = this.afAuth.authState.pipe(
      switchMap(user =>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }else{
          return of(null);
        }
      }

      )
    )
  }
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider:any){
    return this.afAuth.auth.signInWithRedirect(provider).then(loginUser =>{
      return this.updateUserData(loginUser.user);
    })
  }
  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data:User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'Name Not Available',
      photoURL: user.photoURL || 'No image Available'
    }
    return userRef.set(data);
  }
}
