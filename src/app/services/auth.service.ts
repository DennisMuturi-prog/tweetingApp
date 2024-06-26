import { Injectable,inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { Observable, from ,tap} from 'rxjs';
import { UnregisteredUser, User } from '../Types/Types';
import {Firestore, doc, setDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  firestore = inject(Firestore);
  user$ = user(this.firebaseAuth).pipe(
    tap((user: any) => {
      if (user) {
        console.log(user);
        this.currentUser.set({
          userId: 'ghh',
          username: 'oo',
          email: 'ggh',
        });
      } else {
        this.currentUser.set(null);
      }
    })
  );
  currentUser = signal<User | null | undefined>(undefined);
  register(user: any): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      user.email,
      user.password
    ).then((response) => {
      updateProfile(response.user, {
        displayName: `${user.firstName} ${user.secondName}`,
      }).then(() => {
        const userRef = doc(
          this.firestore,
          `users/${this.firebaseAuth.currentUser?.uid}`
        );
        const { firstName, secondName, gender, dateOfBirth } = user;
        const userObject = {
          firstName,
          secondName,
          gender,
          dateOfBirth,
        };
        setDoc(userRef, userObject);
      });
    });
    return from(promise);
  }

  constructor() {
    this.user$.subscribe();
  }
}
