import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, public router: Router) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(
        user => {resolve(user);
        }).catch(err => rejected(err));
    });
  }

  register(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then(
        user => {resolve(user);
        }).catch(err => rejected(err));
    });
  }


  logout(){
    this.AFauth.signOut().then(auth=>{
        this.router.navigate(["/login"]);
    })
  }
}
