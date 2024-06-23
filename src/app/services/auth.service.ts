import { Injectable,inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from '../Types/Types';
import {Firestore, doc, setDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth=inject(Auth)
  firestore=inject(Firestore)
  register(user:User):Observable<void>{
    const promise=createUserWithEmailAndPassword(this.firebaseAuth,
      user.email,
      user.password
    ).then((response)=>{
      updateProfile(response.user,{displayName:`${user.firstName} ${user.secondName}`}).then(()=>{
        const userRef=doc(this.firestore,`users/${this.firebaseAuth.currentUser?.uid}`)
        const {firstName,secondName,gender,dateOfBirth}=user;
        const userObject={
          firstName,
          secondName,
          gender,
          dateOfBirth
        }
        setDoc(userRef,userObject)
      })
    })
    return from(promise)
  }

  constructor() { }
}
